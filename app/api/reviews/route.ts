import { type NextRequest, NextResponse } from "next/server";

import RecentReviews from '@/lib/google/recentReviews';

export async function POST(request: NextRequest) {

    const {x, y, z} = await request.json()

    const pushReviews = await RecentReviews()

    return NextResponse.json({})
}