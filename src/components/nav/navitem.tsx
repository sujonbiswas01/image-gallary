import React, { FC } from 'react'
import Link from 'next/link'
type TProps = {label:string,url:string}
const NavItem:FC<TProps> = ({label,url}) => {
  return (
        <Link href={url} className='inline-block p-2 text-lg text-slate-800 hover:text-white group hover:bg-slate-800 tracking-wide uppercase relative rounded-xl font-bold  after:content-[""] transition-all duration-300 after:absolute after:left-0 after:bottom-1 after:w-full after:h-px after:hover:h-9'>{label}</Link>
  )
}

export default NavItem