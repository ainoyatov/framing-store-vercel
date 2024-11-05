import { type NextRequest, NextResponse } from "next/server";
import TotalReviewCount from "@/lib/google/reviewTotalCount";

export async function POST(request: NextRequest) {

    const reviewTotalCount = await TotalReviewCount();

    return NextResponse.json({reviewTotalCount})

}
