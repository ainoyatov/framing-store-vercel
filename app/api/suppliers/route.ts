import { type NextRequest, NextResponse } from "next/server";

import searchMoldings from "@/lib/mouldings/defaultView";

export async function POST(request: NextRequest) {

    const inputText = await request.json();
    const frameList = await searchMoldings(inputText['msg']['inputText'])

    return NextResponse.json(frameList)

}