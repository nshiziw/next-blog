import { NextRequest, NextResponse } from "next/server";
import Pool from "../../../lib/db"

export async function GET(req: NextRequest, { params }: { params: { slug: string } }) {
    try {
        const { slug } = params

        const [rows] = await Pool.query(
            "SELECT * from posts where slug = ?",
            [slug]
        );


        if (rows.length === 0) {
            return NextResponse.json({
                error: "No posts found"
            }, {status: 404})
        }

        return NextResponse.json({
            message: "Post was found",
            post: rows[0]
        }, { status: 200 })
        console.log('Slug:', slug);
        console.log('Rows:', rows);

    } catch (err) {
        return NextResponse.json({
            message: "Error occurred",
            error: err instanceof Error ? err.message : "Something went wrong"
        })
    }
}