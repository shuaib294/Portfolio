import React from 'react'
import ProjectCard from './ProjectCard'
import { projects } from '../constants/Projects'

const Projects = () => {
  return (
    <div>
      <h1 className="text-center text-4xl font-semibold">My Projects</h1>
      <div className="grid xl:grid-cols-2 grid-cols-1">
      {
        projects.map((project) => {
            return (<ProjectCard key={project.name} project={project}/>)
        })
      }
      </div>
    </div>
  )
}

export default Projects
