import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <section className='w-full px-[10%] py-20'>
      <div className='grid grid-cols-3 gap-8'>
        <div className='flex flex-col gap-2 shadow-lg rounded-md p-4'>
          <h1>Heading</h1>
          <p>Author</p>
          <Link href='/blog' className='text-sky-600 hover:underline'>Read more</Link>
        </div>
      </div>
    </section>
  )
}

export default page