
import SearchMouldingForm from "@/components/mouldings/valleyMoulding"
import { Suspense } from "react";
import { Metadata } from "next";
import LoadingDots from "@/components/shopify/utilities/loading-dots";


export default async function FramesPage() {

  return (
    <Suspense fallback={
      <div className="flex justify-center text-2xl">
        <LoadingDots className="bg-cyan-500"/>
      </div>
    }>
      <div>
        <SearchMouldingForm />
      </div>
    </Suspense>
    
  )
}
