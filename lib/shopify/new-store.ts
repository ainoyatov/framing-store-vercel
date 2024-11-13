import { ensureStartsWith } from "./utils"

const SHOPIFY_GRAPHQL_API_ENDPOINT = '/api/2023-01/graphql.json';

const domain = process.env.SHOPIFY_STORE_DOMAIN 
    ? ensureStartsWith(process.env.SHOPIFY_STORE_DOMAIN, 'https://')
    : '';

const endpoint = `${domain}${SHOPIFY_GRAPHQL_API_ENDPOINT}`

const key = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN!;

export default async function ShopifyFetch ({query}:any) {

    const result = await fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Shopify-Storefront-Access-Token': key,
        },
        body: JSON.stringify({
            ...(query && {query})
        })
    })

    const data = await result.json();
    console.log(data)

    return data;
    
}


// import { ensureStartsWith } from "./utils";

// const SHOPIFY_GRAPHQL_API_ENDPOINT = '/api/2023-01/graphql.json';

// const domain = process.env.SHOPIFY_STORE_DOMAIN 
//     ? ensureStartsWith(process.env.SHOPIFY_STORE_DOMAIN, 'https://')
//     : '';

// const endpoint = `${domain}${SHOPIFY_GRAPHQL_API_ENDPOINT}`;
// const key = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN!;

// export default async function ShopifyFetch({
//   query,
//   variables,
//   headers = {},
//   cache = 'force-cache',
//   tags
// }: {
//   query: string;
//   variables?: Record<string, any>;
//   headers?: HeadersInit;
//   cache?: RequestCache;
//   tags?: string[];
// }): Promise<{ status: number; body: any }> {
//   try {
//     const result = await fetch(endpoint, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'X-Shopify-Storefront-Access-Token': key,
//         ...headers
//       },
//       body: JSON.stringify({
//         query,
//         variables: variables || {}
//       }),
//       cache,
//       ...(tags && { next: { tags } })
//     });

//     const body = await result.json();

//     if (body.errors) {
//       throw new Error(body.errors[0].message || 'An error occurred in the Shopify API');
//     }

//     return {
//       status: result.status,
//       body
//     };
//   } catch (error) {
//     console.error('Shopify fetch error:', error);
//     throw {
//       message: 'An error occurred during the Shopify request',
//       error,
//       query,
//       variables
//     };
//   }
// }
