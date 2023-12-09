import productFragment from '../fragments/products';


export const getProductQuery = `
  query getProduct($handle: String!) {
    product(handle: $handle) {
      ...productInfo
    }
  }
  ${productFragment}
`;


export const getProductsQuery = `
  query getProducts($sortKey: ProductSortKeys, $reverse: Boolean, $query: String) {
    products(sortKey: $sortKey, reverse: $reverse, query: $query, first: 100) {
      edges {
        node {
          ...productInfo
        }
      }
    }
  }
  ${productFragment}
`;

export const getProductRecommendationsQuery = /* GraphQL */ `
  query getProductRecommendations($productId: ID!) {
    productRecommendations(productId: $productId) {
      ...productInfo
    }
  }
  ${productFragment}
`;