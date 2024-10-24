import IntMoulding from "@/components/mouldings/intMouldings";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Frames',
    description: 'Wood frames in Scottsdale, Custom wood frames, Search thousands of unique frames, Canvas wood stretcher bar, stretcher bar, modern frames, classic frames, designer frames, custom designer frames in Scottsdale',
    robots: {
      follow: true,
      index: true
    }
  }

export default async function SearchFrames () {


    return (
        <div>
            <IntMoulding />
        </div>
    )
}



