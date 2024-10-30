import { type NextRequest, NextResponse } from "next/server";

import RecentReviews from '@/lib/google/recentReviews';

export async function POST(request: NextRequest) {

    const GoogleReviews = await RecentReviews()

    return NextResponse.json({GoogleReviews})
}