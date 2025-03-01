"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const Page = () => {
  const params = useParams();
  const slug = params.slug; // Get the slug from the URL
  const [blog, setBlog] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (!slug) return; // Don't try to fetch if slug is undefined

    const fetchBlog = async () => {
      try {
        const response = await fetch(`/api/posts/${slug}`);
        if (!response.ok) {
          throw new Error("Failed to fetch blog");
        }
        const data = await response.json();
        setBlog(data.post); // Assuming response contains a 'post' field
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog(); // Fetch the blog data when slug changes
  }, [slug]); // Re-run the effect whenever slug changes

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <section className="w-full px-[10%] py-20">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">{blog.title}</h1>
        <p className="text-sm text-gray-500">{blog.author}</p>
        <div className="mt-4">
          <p>{blog.content}</p>
        </div>
      </div>
    </section>
  );
};

export default Page;
