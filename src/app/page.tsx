import Navbar from '@/components/nav'
import React from 'react'

const HomePage = () => {
  return (
    <div className='flex justify-center items-center min-h-screen bg-sky-200'>
      <div className='w-full max-w-screen-2xl mx-auto p-20 bg-slate-100 rounded-lg'>
        <Navbar/>
      </div>
    </div>
  )
}

export default HomePage