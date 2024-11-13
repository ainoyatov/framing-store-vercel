import { type NextRequest, NextResponse } from "next/server";
import { getProducts } from "@/lib/shopify/shop/utils";

import ShopifyFetch from "@/lib/shopify/new-store";

export async function POST(request: NextRequest) {

    const shopifyProducts = await ShopifyFetch({
        query: getProducts
    })

    // Access the products array
    const products = shopifyProducts.data.products.edges.map((edge:any) => edge.node);

    return NextResponse.json({products})
}