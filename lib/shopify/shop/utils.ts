
export const getProductsList = `
  {
    products(first: 5) {
      edges {
        node {
          id
          handle
          availableForSale
          title
          description
          options {
            id
            name
            values
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
          featuredImage {
            url
            altText
            width
            height
          }
          seo {
            title
            description
          }
        
          updatedAt
          tags

        }
      }
    }
  }
`