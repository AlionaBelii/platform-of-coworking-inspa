import { section } from 'motion/react-client'
import React from 'react'
import { Link } from 'react-router'

const PopularCategories = () => {
  return (
    <section className="flex flex-col mt-[80px] py-[45px]">
        <h1 className="mono-display text-center text-4xl mb-[60px] md:text-5xl">Popular Categories</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-1 gap-3 py-[40px]">
            <div className="rounded-md object-cover relative col-span-1 row-span-1 hover:shadow-lg duration-150">
                <Link to="/ourworks">
                    <div className="absolute rounded-md h-full w-full flex items-center justify-center opacity-0 hover:opacity-85 duration-150" style={{backgroundColor: 'var(--blue-color)'}}>
                        <h2 className="text-white text-2xl font-medium md:text-4xl">Logo</h2>
                    </div>
                    <img className="rounded-md h-full object-cover object-center" src=".\public\images\categories\logo.jpg" alt="Photo of hands designing logotype" /></Link>
            </div>
            <div className="rounded-md object-cover relative col-span-1 row-span-1 hover:shadow-lg duration-150">
                <Link to="/ourworks">
                    <div className="absolute rounded-md h-full w-full flex items-center justify-center opacity-0 hover:opacity-85 duration-150" style={{backgroundColor: 'var(--blue-color)'}}>
                        <h2 className="text-white text-2xl font-medium md:text-4xl">Social Media</h2>
                    </div>
                    <img className="rounded-md h-full object-cover object-center" src=".\public\images\categories\social-media.png" alt="Photo of hands designing logotype" /></Link>
            </div>
            <div className="rounded-md object-cover relative col-span-1 row-span-1 hover:shadow-lg duration-150">
                <Link to="/ourworks">
                    <div className="absolute rounded-md h-full w-full flex items-center justify-center opacity-0 hover:opacity-85 duration-150" style={{backgroundColor: 'var(--blue-color)'}}>
                        <h2 className="text-white text-2xl font-medium md:text-4xl">Illustration</h2>
                    </div>
                    <img className="rounded-md h-full object-cover object-center" src=".\public\images\categories\illustration.png" alt="Photo of hands designing logotype" /></Link>
            </div>
        </div>
        <Link className="stroke-btn mt-5 self-end" to="/ourworks">View more ↗</Link>
    </section>
  )
}

export default PopularCategories
