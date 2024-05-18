import React from 'react'
import BlogsCard from '../../../components/BlogsCard'

const Stories = () => {
  return (
    <div className='w-[100vw] flex items-center justify-between'>
      <div className='flex w-full items-center flex-col'>
        <div className='h-[90vh] flex w-full'>
          <div className='h-full bg-pink w-full sm:w-[50vw]'>
            <img src="https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-full h-full object-cover' />
          </div>
          <div className='flex-1   p-16 h-full '>
          <h1 className='text-4xl mb-10 w-full  text-center text-gray-700 font-semibold font-sans underline underline-offset-6'>Welcome to MIM's Blog</h1>

            <div className='w-[100%] flex items-center justify-center flex-col  h-[60%]'>

              <img className='w-full rounded-lg h-full' src="https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            
            <div className='mt-4'>
              <hr className='mt-10' />
              <p className='mt-5 '>
                At Make It Mumkin, our mission is to help people and animals. Our blog is a dedicated space where we share inspiring stories, insightful articles, and the latest updates about our work and the issues we care deeply about.
              </p>
            </div>
          </div>
        </div>
        <div className='my-6 h-[1px] w-full bg-gray-600'>

        </div>
        <div className='grid w-[80%] gap-3'>
          {
            Array(6).fill().map(() => {
              return <div>
                <BlogsCard   />
                <hr />
              </div>
            })
          }
        </div>
      </div>

    </div>
  )
}

export default Stories
