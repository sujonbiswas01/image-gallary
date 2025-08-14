import SaveIcon from '@/assets/svg/save_icon'
import Image from 'next/image'
import React, { FC } from 'react'
import {Iamges} from "@/types"
const Card:FC<Iamges> = (props) => {
    const {category,id,like,url,shares,name}=props || {}
  return (
    <figure className='w-fit relative overflow-hidden group'>
        <Image alt='sujon' src="/img.jpg" width={300} height={400} className='w-full h-auto max-w-md group-hover:scale-105'/>
        <figcaption className='w-full absolute p-3 -bottom-20 left-0 bg-slate-900/76 text-white flex justify-between items-center group-hover:bottom-0 group-hover:visited transition-all duration-300 '>
            <div className='space-y-2'>
                <p className='font-semibold'>{name}</p>
                <p className='text-sm'> {like} {shares} share</p>
            </div>
            <button className='w-7 h-7 text-white bg-amber-50 cursor-pointer'><SaveIcon/></button>
           
        </figcaption>
    </figure>
  )
}
export default Card