import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";

const Call = () => {
  return (
    <div className="fixed z-250 bottom-[25px] right-[25px] rounded-full flex items-center justify-center shadow-lg h-[50px] w-[50px]" style={{backgroundColor: 'var(--blue-color)'}}>
        <a href="tel:+373755555"><FaPhoneAlt className="text-white" /></a>
    </div>
  )
}

export default Call
