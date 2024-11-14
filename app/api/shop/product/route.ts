import { type NextRequest, NextResponse } from "next/server";
import { getProducts } from "@/lib/shopify/shop/utils";
import ShopifyFetch from "@/lib/shopify/new-store";

interface ProductProps {
  id: string;
  title: string;
  description: string;
  featuredImage: {
    url: string;
    width: number;
    height: number;
  };
  priceRange: {
    maxVariantPrice: {
      amount: string;
      currencyCode: string;
    };
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
}

interface ShopifyResponse {
  data: {
    products: {
      edges: Array<{ node: ProductProps }>;
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