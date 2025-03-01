import { NextRequest, NextResponse } from "next/server";
import pool from "../../lib/db"

type Post = {
    id: number,
    title: string,
    content: string,
    author: string,
    date: string,
    slug: string
}


// fetch all blogs from the database
export async function GET() {
    try {
        const [rows] = await pool.query<Post[]>("SELECT * FROM posts order by date desc");
        return NextResponse.json(rows);
    } catch {
        return NextResponse.json({
            error: 'Error fetching posts'
        }, {status: 500})
    }
}



// create a new blog post
export async function POST(req: NextRequest) {
    try {

        const { title, author, content } = await req.json();
        
        if (!title || !author || !content) {
            return NextResponse.json({
                error: 'All fields are required'
            }, {status: 400})
        }
        // generate slug
        const slug = title.toLowerCase().replace(/\s+/g, "-");
        const date = Date.now();


        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const [result] = await pool.query( 
        "INSERT INTO posts (title, author, content, date, slug) VALUES (?, ?, ?, ?, ?)",
        [title, author, content, date, slug]
        );


        return NextResponse.json({
            title,
            slug
        }, {status: 201})

    } catch (e){
        return NextResponse.json({
            message: 'Error creating post',
            error: e instanceof Error ? e.message : "Error creating post"
        }, { status: 500 })
        console.log(e);
    }
}