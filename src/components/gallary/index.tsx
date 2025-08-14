import React from 'react'
import Card from './card'
import {data} from '@/lib/db'
const Gallary = () => {
  return (
    <div className='pt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
        {data.map((item)=>(
            <Card {...item} key={item.id}/>
        ))}
    </div>
  )
}

export default Gallary