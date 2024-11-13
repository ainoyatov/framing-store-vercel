import ShopifyFetch from "@/lib/shopify/new-store";

const page = async () => {
  const response = await ShopifyFetch({
    query: `
      {
        products(first: 3) {
          edges {
            node {
              id
              title
              description
            }
          }
        }
      }
    `
  });

  // Access the products array
  const products = response.data.products.edges.map((edge:any) => edge.node);


  return (
    <div className="p-4">
      {products.map((product:any) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
}

export default page;





// import ShopifyFetch from "@/lib/shopify/new-store"

// const page = async () => {

//   const response = await ShopifyFetch({query: `
//     {products(first: 3) {
//       edges {
//         node {
//           id
//           title
//           description
//         }
//       }}
//     }`
//   })
 
//   console.log(response)

//   return (
//     <div>
      
//     </div>
//   )
// }

// export default page




// import ShopifyFetch from "@/lib/shopify/new-store"

// const page = async () => {

//   const response = await ShopifyFetch({
//     query: `
//       {
//       shop {
//         name
//       }
//     }
//     `
//   })


//   return (
//     <div className="flex w-full justify-center text-3xl py-8">
//       Easter Egg!!

//     </div>
//   )
// }

// export default page