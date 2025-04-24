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
                <div className="text-yellow-500 text-4xl font-bold text-center flex justify-center m-8 max-md:mt-10">
                    Framing Tips & Inspiration
                </div>
                <BlogList />
            </div>
        </main>
    );
}