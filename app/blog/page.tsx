import { fetchEntries } from "@/lib/contentful/contentful";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import type { Entry, Asset } from "contentful";

export const revalidate = 30;

export const metadata = {
  title: "Framing Tips & Inspiration | Art & Custom Frames",
  description: "Explore our expert blog for custom framing advice, materials, and display techniques. Ideal for artists, collectors, and anyone who loves great presentation.",
  alternates: {
    canonical: "https://www.artandcustomframes.com/blog",
  },
  openGraph: {
    title: "Framing Tips & Inspiration",
    description: "Discover helpful guides on matting, conservation, and art preservation from Scottsdale's framing experts.",
    url: "https://www.artandcustomframes.com/blog",
    siteName: "Art & Custom Frames",
    images: [
      {
        url: "https://www.artandcustomframes.com/blog-default-image-placeholder.png",
        width: 1200,
        height: 630,
        alt: "Framing Blog Cover",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Framing Tips & Inspiration",
    description: "Helpful tips and insights into the world of custom framing.",
    images: ["https://www.artandcustomframes.com/blog-default-image-placeholder.png"],
  },
};


export default async function BlogPage() {

    const posts = await fetchEntries();

    const validPosts = posts.filter((post: any) => {
        const fields = (post as Entry<any>)?.fields;
        return (
            fields?.title &&
            fields?.slug &&
            fields?.publishedDate &&
            fields?.author &&
            typeof fields.author === "object" &&
            (fields.author as Entry<any>)?.fields?.name
        );
    });

    // Sort posts by publishedDate (newest first)
    validPosts.sort((a: Entry<any>, b: Entry<any>) => {
        const dateA = new Date(String(a.fields.publishedDate || 0)).getTime();
        const dateB = new Date(String(b.fields.publishedDate || 0)).getTime();
        return dateB - dateA;
    });

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="w-fit mx-auto px-4">
                <h1 className="py-8 text-4xl font-bold bg-gradient-to-r from-[#026974] to-[#00a8e8] bg-clip-text text-transparent">
                Framing Tips & Inspiration
                </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {validPosts.map((post: any) => {
                    const fields = (post as Entry<any>).fields;
                    const { title, subtitle, publishedDate, slug, author } = fields;
                    const authorFields = (author as Entry<any>)?.fields;
                    const authorName = String(authorFields?.name || "Unknown Author");
                    const authorAvatar = (authorFields?.avatar as Asset)?.fields?.file?.url;

                    return (
                        <div
                        key={post.sys.id}
                        className="border rounded-xl p-6 shadow-sm hover:shadow-md transition duration-200"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                {authorAvatar && (
                                    <Image
                                        src={`https:${authorAvatar}`}
                                        alt={authorName}
                                        width={32}
                                        height={32}
                                        className="rounded-full"
                                    />
                                )}
                                <p className="text-sm text-gray-500">
                                By {authorName} • {new Date(String(publishedDate)).toLocaleDateString()} • 3 min read
                                </p>
                            </div>
                            <h2 className="text-xl font-semibold mb-2">{String(title)}</h2>
                            {subtitle && <p className="text-gray-600 text-sm mb-4">{String(subtitle)}</p>}
                            <Link
                                href={`/blog/${String(slug)}`}
                                className="inline-block mt-auto text-yellow-600 font-medium hover:underline"
                            >
                                <div className="bg-yellow-400 text-white px-4 py-2 rounded-md inline-flex items-center">
                                    Read More →
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}