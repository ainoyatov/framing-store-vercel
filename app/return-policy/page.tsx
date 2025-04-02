import { Metadata } from "next";
import ReturnPolicy from "@/components/policy/ReturnPolicy";

export const metadata: Metadata = {
    title: 'Return Policy',
    description: 'Store return policy',
    robots: {
      follow: true,
      index: true
    },
  }

const ReturnPage = () => {
    
  return (
    <div>
        <ReturnPolicy />
    </div>
  )
}

export default ReturnPage