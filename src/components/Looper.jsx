import React from 'react'
import { motion } from "motion/react"

const Looper = ({isSticky}) => {
  return (
    <motion.img animate={{ rotate: 360 }}
                transition={{ duration: 3.5, repeat: Infinity }} className={`h-[800px] absolute md:top-10 right-0 z-0 ${isSticky ? 'sticky top-0 right-0 z-0' : ''}`} src=".\public\images\looper.svg" alt="" >
    </motion.img>
  )
}

export default Looper
