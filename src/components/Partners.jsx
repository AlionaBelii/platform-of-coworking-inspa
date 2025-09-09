import { section } from 'motion/react-client'
import React from 'react'

const Partners = () => {
  return (
    <section className="mt-[80px] p-[55px] rounded-md flex flex-wrap gap-5 justify-center items-center md:flex-row md:justify-between" style={{backgroundColor: 'var(--black-color)'}}>
        <img className="h-[50px] object-contain" src=".\public\images\partners\blender.png" alt="Blender logo" />
        <img className="h-[50px]" src=".\public\images\partners\coreldraw.png" alt="Coreldraw logo" />
        <img className="h-[50px]" src=".\public\images\partners\creative.png" alt="Creative commons logo" />
        <img className="h-[50px]" src=".\public\images\partners\canva.webp" alt="Canva logo" />
        <img className="h-[50px]" src=".\public\images\partners\adobe.png" alt="Adobe logo" />
    </section>
  )
}

export default Partners
