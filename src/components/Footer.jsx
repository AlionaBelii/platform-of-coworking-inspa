import React from 'react'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <footer className="mt-[80px]" style={{backgroundColor: 'var(--blue-color)'}}>
      <div className="container mx-auto flex flex-col items-center p-8 gap-5">
        <Link to="/"><img className="h-12" src=".\public\images\inspa-logo-white.svg" alt="Inspa logo" /></Link>
        <div className="flex flex-col text-sm md:flex-row items-center text-white gap-3">
          <span>Copyright 2025</span>
          <a className="underline" href="https://colorlib.com/privacy-policy/">Privacy Policy</a>
          <a className="underline" href="https://colorlib.com/wp/terms-conditions/">Site Terms & </a>
          <a className="underline" href="https://colorlib.com/wp/colorlib-disclaimer/">Disclousers</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
