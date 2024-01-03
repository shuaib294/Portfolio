import React from 'react'
import Navbar from './Navbar'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Header = () => {

  const [text] = useTypewriter({
    words: ['Web Developer', 'Designer', 'Engineering Student'],
    loop : {},
    typeSpeed:100,
    deleteSpeed:40
  })

  return (
    <div className="h-screen">
        <Navbar />
        <div className="bg-header h-5/6 bg-cover flex justify-start items-center">
            <div>
                <i></i>
                <i></i>
            </div>
            <div className="ms-10 w-2/3">    
            <h1 className="xl:text-8xl lg:text-[55px] md:text-[55px] sm:text-[45px] text-[35px] font-semibold">Hii! I am Shuaib</h1>
            <h5><span className="text-black xl:text-4xl lg:text-4xl md:text-4xl text-2xl font-semibold">{text}</span><span><Cursor /></span></h5>
            </div>
        </div>
    </div>
  )
}

export default Header
