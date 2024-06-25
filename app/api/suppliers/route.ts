import { type NextRequest, NextResponse } from "next/server";

import searchMoldings from "@/lib/mouldings/searchedView";

export async function POST(request: NextRequest) {

    const data = await request.json();    
    const txt = data['msg']['inputText']
    const num = data['msg']['pageNum']
    console.log(num)
    console.log(txt)

    const frameList = await searchMoldings(txt,num)

    return NextResponse.json(frameList)

}