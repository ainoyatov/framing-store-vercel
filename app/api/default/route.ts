import { type NextRequest, NextResponse } from "next/server";

import defaultViews from "@/lib/mouldings/defaultView";

export async function POST(request: NextRequest) {
    const num = await request.json()
    console.log(num)
    
    const frameList = await defaultViews(num)

    return NextResponse.json(frameList)

}