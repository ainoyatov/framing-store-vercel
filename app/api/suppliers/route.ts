import { type NextRequest, NextResponse } from "next/server";

import searchMoldings from "@/lib/mouldings/searchedView";

export async function POST(request: NextRequest) {

    const inputText = await request.json();
    const frameList = await searchMoldings(inputText['msg']['inputText'])

    return NextResponse.json(frameList)

}