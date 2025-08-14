import SearchIcon from '@/assets/svg/search-icon'
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-center gap-2.5'>
        <div className='flex w-full max-w-xl'>
            <input type="text" placeholder='search...' className='inline-block w-full py-2 px-4 bg-slate-100 border-2 border-slate-200 focus:outline-none text-slate-400 rounded-xl pr-11'/>
            <button className='w-8 text-slate-500 cursor-pointer -ml-12'><SearchIcon/></button>
        </div>
        <button className='px-8 bg-slate-800 text-white text-base uppercase font-bold py-4 rounded-md cursor-pointer hover:bg-slate-700 active:translate-y-0.5'>upload</button>
    </div>
  )
}

export default Header