import { projectList } from '@/app/constant'
import React from 'react'
import { ProjectCard } from '../custom'

export default function ProjectScroll() {
    return (
            <div className='flex w-max space-x-24 px-24'>
                {projectList.map((item) => (
                    <ProjectCard
                        image={item.image}
                        alt={item.alt}
                        bgColor={item.bgColor}
                        title={item.title}
                        type={item.type}
                        desc={item.desc} />
                ))}
            </div>

    )
}
