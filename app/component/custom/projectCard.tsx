import Image from 'next/image'
import React from 'react'
import projectImg from '../../../public/imgProject/tokoBuku.png'

interface projectProps {
    image : string;
    alt : string;
    title : string;
    type : string;
    desc : string;
    bgColor : string;
}

export default function ProjectCard({image, alt, bgColor, title, type, desc}: projectProps) {
  return (
    <div className={`w-56 ${bgColor} flex flex-col overflow-hidden rounded-3xl shadow-xl`}>
        <Image src={image} alt={alt}/>

        <div className='w-full flex flex-col p-3 space-y-3'>
            <p className='text-3xl font-semibold text-white text-center'>{title}</p>

            <p className='px-2 py-1 bg-black bg-opacity-50 text-white text-xs w-max rounded-full'>{type}</p>
        
            <p className='text-white'>{desc}</p>
        </div>
    </div>
  )
}
