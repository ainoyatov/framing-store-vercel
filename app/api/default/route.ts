import { type NextRequest, NextResponse } from "next/server";

import defaultViews from "@/lib/mouldings/defaultView";

export async function POST(request: NextRequest) {
    const {num, searchTerm} = await request.json()
    
    const frameList = await defaultViews(num, searchTerm)

    return NextResponse.json(frameList)

}





