import SearchMouldingForm from "@/components/mouldings/valleyMoulding"
import { Metadata } from "next";
import LoadingDots from "@/components/shopify/utilities/loading-dots";
import FrameSelections from "@/components/frame-gallery/frameChoices";

export const metadata: Metadata = {
  title: 'Frames',
  description: 'Find custom frames in Scottsdale, Find wood frames on sale near Scottsdale, Search thousands of unique frames, Find your perfect wedding picture frames at our store in Scottsdale',
  robots: {
    follow: true,
    index: true
  }
}

export default async function FramesPage() {

  return (
    <div>
      {/* <FrameSelections /> */}
      <SearchMouldingForm />
    </div>

  )
}

