
export const getProducts = `
  {
    products(first: 3) {
      edges {
        node {
          id
          title
          description
          featuredImage {
            url
            width
            height
          }
          priceRange {
            maxVariantPrice {
              amount
              currencyCode
            }
            minVariantPrice {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }
`