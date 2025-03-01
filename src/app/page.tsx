import Link from "next/link"

const page = () => {
  return (
    <section className="w-full h-screen bg-slate-950 text-sky-50 flex flex-col gap-2 items-center justify-center">
      <h1 className="uppercase font-semibold">easy blog website</h1>
      <p>I just made it practicing how to use next js&apos;s backend and how to use slugs</p>
      <p>Here are some important links;</p>
      <Link href="/create">Create a Blog</Link>
      <Link href="/blogs">View all Blogs</Link>
    </section>
  )
}

export default page