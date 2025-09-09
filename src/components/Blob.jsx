import React from 'react'
import { motion } from "motion/react"

const Blob = ({ isSticky }) => {

    
  return (
    <motion.img animate={{ rotate: 360 }}
                transition={{ duration: 4.5, repeat: Infinity }} className={`h-[800px] absolute md:top-10 right-0 z-0 ${isSticky ? 'sticky top-0 right-0 z-0' : ''}`} src=".\public\images\blob.svg" alt="" >
    </motion.img>
  )
}

export default Blob
