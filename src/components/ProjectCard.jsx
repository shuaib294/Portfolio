import React from 'react'
import goto from '../assets/icons/goto.png'

const ProjectCard = ({project}) => {
  return (
    <div className="md:p-20 xl:p-20 lg:p-20 p-10 ">
      <div className="rounded-3xl">
      <img 
        src={project.imgURL} alt={project.name}
        className="w-full shadow-3xl rounded-3xl"
      />
      <div className="flex justify-center space-x-5 pt-6 items-center">
      <h3 className="font-semibold text-[38px]">{project.name}</h3>
      <button className=""><img className="h-14" src={goto}/></button>
      </div>
    </div>
    </div>
  )
}

export default ProjectCard
