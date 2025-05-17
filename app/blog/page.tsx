import BlogList from "@/components/blog-posts/BlogList";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Explore expert tips, framing ideas, and behind-the-scenes stories from Art & Custom Frames, your trusted custom picture framing shop in Scottsdale, AZ.',
    robots: {
      follow: true,
      index: true
    },
}

export default function MainBlogPage() {

    return (
        <main className="p-8 max-w-7xl mx-auto">
            <div>
                <div className="m-8 max-md:mt-10 flex justify-center text-center">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-[#026974] to-[#00a8e8] bg-clip-text text-transparent">
                        Framing Tips & Inspiration
                    </h1>
                </div>
                <BlogList />
            </div>
        </main>
    );
}