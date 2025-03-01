'use client'; // Add this line at the very top


import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const Page = () => {

    const [author, setAuthor] = useState("")
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [error, setError] = useState("")
    const [success, setSuccess] = useState(false)
    const router = useRouter()


    const handleBlogSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        setError("");
        setSuccess(false);

        const postData = {
            author,
            title,
            content,
        }

        try {

            const response = await fetch("/api/posts", {
                method: 'POST',
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(postData),
            });

            if (!response.ok) {
                const { error } = await response.json();
                setError(error || "Failed to create blog post");
            } else {
                setSuccess(true);
                setAuthor("")
                setTitle("")
                setContent("")
                setTimeout(() => {
                    router.push('/blogs');
                }, 1500)
            }

        } catch (e) {
            setError("Failed to create blog. Please try again later.");
            console.log(e);
        }
    }

    return (
        <section className='w-full h-screen flex flex-col items-center justify-center'>
            <form onSubmit={handleBlogSubmit} className='flex flex-col shadow-md gap-2 p-3 w-2/5'>
                {error && <p className="text-red-500">{error}</p>}
                {success && <p className="text-green-500">Blog created successfully!</p>}
                <label htmlFor="">Author</label>
                <input className='border px-4 py-2 outline-none' type="text" required value={author} onChange={(e) => setAuthor(e.target.value)} id="author" />
                <label htmlFor="">Title</label>
                <input className='border px-4 py-2 outline-none' type="text" required value={title} onChange={(e) => setTitle(e.target.value)} id="title" />
                <label htmlFor="">Content</label>
                <textarea className='border px-4 py-2 outline-none' required value={content} onChange={(e) => setContent(e.target.value)} id="content"></textarea>
                <button className='bg-teal-500 m-auto text-teal-50 uppercase py-2 px-5 font-semibold w-fit' type="submit">Create Blog</button>
            </form>
        </section>
    )
}

export default Page