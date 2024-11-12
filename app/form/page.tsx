
import ShopifyFetch from "@/lib/shopify/new-store"

const page = async () => {

  const response = await ShopifyFetch({
    query: `
      {
      shop {
        name
      }
    }
    `
  })

  // console.log(response)

  return (
    <div className="flex w-full justify-center text-3xl py-8">
      Easter Egg!!

    </div>
  )
}

export default page