import React from 'react'
import { MegaMenuDefault } from './Header'

import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
    <div className='relative h-screen home '>
        <div className='sticky bg-black/70 w-full z-10 top-0'>
          <MegaMenuDefault />
        </div>
        <div className='rounded-t-xl mt-6 w-full'>
          <Outlet/>
        </div>
        <hr className='mt-4' />
        <div className='mt-6'>
          <Footer /> 
        </div>
      </div>
  )
}

export default UserLayout
