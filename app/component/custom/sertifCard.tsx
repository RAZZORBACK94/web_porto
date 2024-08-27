import Image from 'next/image'
import React from 'react'

import img from '../../../public/sertif/digiup.png'

interface sertifProps{
  img : object;
  title : string;
  sebagai: string;
  date: string
}

export default function SertifCard({img, title, sebagai, date}: sertifProps) {
  return (
    <div className='h-max w-full bg-slate-400 rounded-xl overflow-hidden shadow-xl'>
      <div className='h-32 w-full bg-slate-800' style={{
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover',  // or 'contain' depending on your needs
    backgroundPosition: 'top',
    backgroundRepeat: 'no-repeat'
  }}/>

      <div className='flex flex-col space-y-1 p-3 bg-white'>
        <p className='font-bold text-2xl'>{title}</p>

        <div className='flex justify-between'>
          <p className='text-lg'>{sebagai}</p>
          <p className='text-lg'>{date}</p>
        </div>
      </div>
    </div>
  )
}
