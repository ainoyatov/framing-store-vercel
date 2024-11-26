import { ensureStartsWith } from "./utils";
import { ShopifyProduct } from "./types";

 
interface ShopifyResponse {
    data: {
        products: {
        edges: Array<{ node: ShopifyProduct }>;
        };
    };
}

interface ShopifyFetchParams {
    query: string;
}

const apiVersion = process.env.SHOPIFY_STOREFRONT_API_VERSION!;
const SHOPIFY_GRAPHQL_API_ENDPOINT = `/api/${apiVersion}/graphql.json`;

const domain = process.env.SHOPIFY_STORE_DOMAIN 
  ? ensureStartsWith(process.env.SHOPIFY_STORE_DOMAIN, 'https://')
  : '';

const endpoint = `${domain}${SHOPIFY_GRAPHQL_API_ENDPOINT}`;

const key = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN!;

export default async function ShopifyFetch({ query }: ShopifyFetchParams): Promise<ShopifyResponse> {
  const result = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': key,
    },
    body: JSON.stringify({ query }),
  });

  if (!result.ok) {
    throw new Error("Failed to fetch data from Shopify");
  }

  const data: ShopifyResponse = await result.json();

  return data;

}
