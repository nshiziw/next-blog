import { NextRequest, NextResponse } from "next/server";
// import Pool from "../../../lib/db"

export async function GET(req: NextRequest, { params }: { params: { slug: string } }) {
    try {
        const { slug } = params
        return NextResponse.json({
            message: slug
        })
    } catch (err) {
        return NextResponse.json({
            message: "Error occurred",
            error: err instanceof Error ? err.message : "Something went wrong"
        })
    }
}