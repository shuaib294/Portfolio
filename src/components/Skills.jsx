import React from 'react'
import Skillbar from './skillbar'
import {skillsdata} from '../constants/skillsdata'


const Skills = () => {
  return (
    <div>
      <div className="py-14">
      <h1 className="text-4xl text-center mb-14 font-semibold">My Skills</h1>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 ">
      {
        skillsdata.map((skill) => {
            return (<Skillbar key={skill.name} skill={skill}/>)
        })
      }
      </div>
      </div>
    </div>
  )
}

export default Skills
