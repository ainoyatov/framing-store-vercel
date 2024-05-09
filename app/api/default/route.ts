import { type NextRequest, NextResponse } from "next/server";

import defaultViews from "@/lib/mouldings/defaultView";

export async function POST(request: NextRequest) {
    
    const frameList = await defaultViews()

    return NextResponse.json(frameList)

}