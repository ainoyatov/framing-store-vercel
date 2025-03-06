// import Gallery from "@/components/GalleryImages";
import { Suspense } from "react";
import { Metadata } from "next";
import LoadingDots from "@/components/shopify/utilities/loading-dots";
import Head from "next/head";

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Wedding picture frames, Custom frames, Modern frames, Art frame gallery in Scottsdale',
  robots: {
    follow: false,
    index: false
  }
}

export default function GalleryHome() {
  return (
    <>
      <Head>
        <title>Gallery</title>
        <link
          rel="canonical"
          href="https://artandcustomframes.com/gallery"
          key="canonical"
        />
      </Head>
      <Suspense fallback={
        <div className="flex justify-center text-2xl">
          <LoadingDots className="bg-cyan-500"/>
        </div>
      }>
        <div className="px-4 2xl:px-32">
          {/* <Gallery /> */}
        </div>
      </Suspense>
    </>
  )
}

