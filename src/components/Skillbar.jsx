import React from 'react'
import {Circle} from 'rc-progress' 

const Skillbar = ({skill}) => {
  return (
      <div className="flex flex-col items-center bg-white">
      <Circle className="h-[300px] w-[300px]" percent={skill.percent} strokeColor="gray" strokeWidth={10} trailWidth={10}/>
      <h3 className="text-3xl font-semibold mt-5">{skill.name} <span>{skill.percent}%</span></h3>
      <img src={skill.imgURL} className="h-[100px] m-0 p-0 relative bottom-[260px]"/>
      </div>
  )
}

export default Skillbar
