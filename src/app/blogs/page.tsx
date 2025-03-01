'use client';
import Link from 'next/link'
import React, {useState, useEffect} from 'react'

const page = () => {

  const [Blogs, setBlogs] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>("")


  useEffect(() => {
    const fetchBlogs = async () => {
      try {

        const response = await fetch('/api/posts')
        if (!response.ok) {
          throw new Error("Failed to fetch blogs")
        }

        const data = await response.json()
        setBlogs(data)

      } catch (e: any) {
        setError(e.message || "Something went wrong")
      } finally {
        setLoading(false)
      }
    }

    fetchBlogs()
  }, [])

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <section className='w-full px-[10%] py-20'>
      <div className='grid grid-cols-3 gap-8'>
        {Blogs.map((Blog, index) => (
          <div key={index} className='flex flex-col gap-2 shadow-lg rounded-md p-4'>
            <h1>{Blog.title}</h1>
            <p>{Blog.author}</p>
            <Link href={`/blog/${Blog.slug}`} className='text-sky-600 hover:underline'>Read more</Link>
          </div>
        ))}
      </div>
    </section>
  )
}

export default page