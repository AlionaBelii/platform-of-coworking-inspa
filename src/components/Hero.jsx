import React from 'react'
import { Link } from 'react-router'
import Blob from '../components/Blob'
import Looper from '../components/Looper'

const Hero = () => {
  return (
     <div className="">
        <div className="flex justify-between items-center relative overflow-hidden h-screen md:h-[800px]">
          <div className="bg-white opacity-50 absolute z-1 w-full h-full xl:hidden"></div>
          <div className="absolute z-10 left-0 w-full">
            <h1 className="mono-display text-6xl md:text-7xl md:leading-20"><span style={{color: 'var(--green-color)'}}>Design</span> <br /><span className='font-semibold' style={{fontFamily: 'Montserrat'}}>Starts With</span><br />A <span style={{color: 'var(--blue-color)'}}>Connection</span></h1>
            <p className="backdrop-opacity-50 mt-15 text-xl">A platform where clients and designers collaborate seamlessly.</p>
            <div className="md:flex items-end justify-between">
              <div className="flex flex-col mt-30 lg:flex-row gap-3">
                <Link className="blue-btn" to="/start">Start a project</Link>
                <Link className="stroke-btn" to="/designers">Browse Designers ↗</Link>
              </div>
              <div className="mt-15 input-subscribe relative z-10 md:w-[500px]">
                <input className="text-gray-500 px-3 w-full" type="text" placeholder="Your E-mail Address"/> 
                <Link className="blue-btn absolute right-0 top-0" to="/">Subscribe</Link>
              </div>
           </div>
          </div>
          <Blob />
          <Looper />
        </div>
    </div>
  )
}

export default Hero
