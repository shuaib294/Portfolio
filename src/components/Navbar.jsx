import React from 'react'

const Navbar = () => {

  return (
    <div className="h-[120px] px-6 flex justify-between items-center">   
        <h3 className="lg:text-4xl md:text-4xl xl:text-4xl text-[30px] font-semibold">Mohammad Shuaib</h3>
        <div className="flex space-x-5">
           <button className="bg-black text-white lg:text-2xl md:text-2xl xl:text-2xl sm:text-2xl text-lg p-6 rounded-lg">Lets Connect</button>
        </div>
    </div>
  )
}

export default Navbar
