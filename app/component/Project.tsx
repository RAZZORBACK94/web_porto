import React from 'react'
import { Button, ProjectCard } from './custom'
import { projectList } from '../constant'
import { ProjectScroll } from './scroll'

export default function Project() {
  return (
    <div className="container">

      {/* title */}
      <div className=" text-center">
        <p className="text-5xl font-bold">Project</p>
        <p className="text-lg">Project Terbaru di Waktu Luang</p>
      </div>

      <div className=" hide-scrollbar relative z-20 flex items-center h-[500px] overflow-x-scroll w-96">
        {/* card eduaction */}
        <ProjectScroll/>
      </div>

      <div className='flex justify-center'>
      <Button link="#" bgColor="bg-[#FF0000]" text="Selengkapnya"/>
      </div>

      {/* cosmetic */}
      
    </div>
  )
}
