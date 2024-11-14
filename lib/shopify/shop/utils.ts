
export const getProducts = `
  {
    products(first: 5) {
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