import Link from 'next/link'
import React from 'react'
import NavItem from './navitem'

const Navbar = () => {
  return (
    <nav className='flex justify-end w-full mb-20 pb-8 border-b-2 border-slate-200 items-end gap-4'>
        {/* logo */}
            <Link className='text-5xl px-4 py-2 mr-auto text-slate-800 font-sans font-black uppercase tracking-widest visited:text-slate-800 border-4 border-slate-800 shadow-lg active:translate-y-0.5 transition-all duration-150 rounded-2xl' href="/">Gallery</Link>
            {Navitem.map((item,index)=>(
                      <NavItem key={index} {...item}></NavItem>

            ))}
     
       
    </nav>
  )
}

export default Navbar

const Navitem = [
  {label:"Photo",url:"/?category=photo"},
  {label:"Vactor",url:"/?cetagory=vector"}
]