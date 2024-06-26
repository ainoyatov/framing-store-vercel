
import SearchMouldingForm from "@/components/mouldings/valleyMoulding"
import { Metadata } from "next";
import LoadingDots from "@/components/shopify/utilities/loading-dots";

export const metadata: Metadata = {
  title: 'Frames'
}

export default async function FramesPage() {

  return (
    <div>
      <SearchMouldingForm />
    </div>

  )
}

