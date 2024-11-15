import { type NextRequest, NextResponse } from "next/server";
import { getProducts } from "@/lib/shopify/shop/utils";
import ShopifyFetch from "@/lib/shopify/new-store";
import { ShopifyProduct } from "@/lib/shopify/types";

interface ShopifyResponse {
  data: {
    products: {
      edges: Array<{ node: ShopifyProduct }>;
    };
  };
}

export async function POST(request: NextRequest) {
  const shopifyProducts: ShopifyResponse = await ShopifyFetch({
    query: getProducts
  });

  // Access the products array with the correct type
  const products = shopifyProducts.data.products.edges.map(edge => edge.node);

  return NextResponse.json({ products });
}