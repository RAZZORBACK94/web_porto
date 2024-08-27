import React from 'react'
import { SertifCard } from '../custom'
import { sertifList } from '@/app/constant'

export default function SertifScroll() {
  return (
    <div className='flex flex-col h-max space-y-16 my-10 '>
        {sertifList.map((item) => (
            <SertifCard 
            img={item.image} 
            title={item.title}             
            sebagai={item.sebagai} 
            date={item.date}/>
        ))}
    </div>
  )
}
