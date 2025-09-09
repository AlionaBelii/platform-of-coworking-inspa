import React from 'react'
import { Link } from 'react-router'
import { useState } from 'react'
import AuthModal from './AuthModal'

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const [modalActive, setModalActive] = useState(false)
  return (
    <header className="sticky top-0 z-100">
        <div className="hidden lg:block" style={{backgroundColor: 'var(--blue-color)'}}>
          <div className="container mx-auto text-white flex flex-col md:flex-row justify-between items-center p-3" >
            <Link to="/" className="mb-5 md:mb-0"><img src=".\public\images\inspa-logo-white.svg" alt="Inspa logo" /></Link>
            <div className="flex flex-col justify-self-stretch gap-2 md:flex-row md:gap-8 items-center">
              <a className="flex flex-row gap-2" href="mailto:design@inspa.md"><img src=".\public\images\header-mail-white.svg" alt="Mail icon" />design@inspa.md</a>
              <a className="flex flex-row gap-2" href="tel:+373755555"><img src=".\public\images\header-phone-white.svg" alt="Phone icon" />+373 755 555</a>
              <div className="flex items-center gap-2 p-2 bg-white rounded-sm">
                <input className="text-gray-500 px-5 " type="text" placeholder="Search"/> 
                <a href=""><img src=".\public\images\header-loop-blue.svg" alt="Search icon" /></a>
              </div>
            </div>
          </div>
        </div>
        <nav className="hidden lg:block bg-white border-b-2 border-gray-100">
            <ul className="container mx-auto flex items-center justify-start md:flex-row md:justify-between md:items-center px-3" style={{color: 'var(--black-color)'}}>
                <div className="flex flex-wrap items-center text-center font-regular text-md md:text-lg">
                  <li className="py-4 px-4 md:px-8 hover:border-b-3" style={{borderBottomColor: 'var(--blue-color)'}}><Link onClick={() => setOpenMenu(false)} to="/">Home</Link></li>
                  <li className="py-4 px-4 md:px-8 hover:border-b-3" style={{borderBottomColor: 'var(--blue-color)'}}><Link onClick={() => setOpenMenu(false)} to="/start">Start</Link></li>
                  <li className="py-4 px-4 md:px-8 hover:border-b-3" style={{borderBottomColor: 'var(--blue-color)'}}><Link onClick={() => setOpenMenu(false)} to="/ourworks">Our works</Link></li>
                  <li className="py-4 px-4 md:px-8 hover:border-b-3" style={{borderBottomColor: 'var(--blue-color)'}}><Link onClick={() => setOpenMenu(false)} to="/designers">Designers</Link></li>
                  <li className="py-4 px-4 md:px-8 hover:border-b-3" style={{borderBottomColor: 'var(--blue-color)'}}><Link onClick={() => setOpenMenu(false)} to="/pricing">Pricing</Link></li>
                  <li className="py-4 px-4 md:px-8 hover:border-b-3" style={{borderBottomColor: 'var(--blue-color)'}}><Link onClick={() => setOpenMenu(false)} to="/aboutus">About us</Link></li>
                  <li className="py-4 px-4 md:px-8 hover:border-b-3" style={{borderBottomColor: 'var(--blue-color)'}}><Link onClick={() => setOpenMenu(false)} to="/contact">Contact</Link></li>
                  <li className="py-4 px-4 md:px-8 hover:border-b-3" style={{borderBottomColor: 'var(--blue-color)'}}><Link onClick={() => setOpenMenu(false)} to="/blog">Blog</Link></li>
                </div>
                <div className="flex gap-7">
                  <button
                    className="sign-btn flex gap-2 items-center"
                    onClick={() => setModalActive(true)}>
                    <span>Sign up</span> <img className="h-5" src="./public/images/login.svg" alt="" />
                  </button>
                  <AuthModal active={modalActive} setActive={setModalActive} />
                  <button onClick={() => setOpenMenu(!openMenu)}>
                  {
                    openMenu ? <img src=".\public\images\header-close-menu.svg" alt="Menu" /> : <img src="..\images\header-burger-blue.svg" alt="Menu" />
                  }
                  </button>
                </div>
            </ul>
            
        </nav>
        <div className="hidden lg:block absolute z-20 top-[100%] duration-150 bg-white font-regular w-full h-screen flex flex-col items-center lg:w-1/4" style={{right: openMenu ? 0 : "-100%"}}>
          <Link className="py-5 w-full flex justify-center gap-3  hover:shadow-lg" onClick={() => setOpenMenu(false)} to="/myaccount">My account <img src=".\public\images\header\my-account.svg" alt="Icon of user" /></Link>
          <Link className="py-5 w-full flex justify-center gap-3 hover:shadow-lg" onClick={() => setOpenMenu(false)} to="/dashboard">Dashboard <img src=".\public\images\header\dashboard.svg" alt="Icon of dashboard" /></Link>
          <Link className="py-5 w-full flex justify-center gap-3 hover:shadow-lg" onClick={() => setOpenMenu(false)} to="/notifications">Notifications <img src=".\public\images\header\notification.svg" alt="Icon of notification" /></Link>
        </div>

        {/* Burger Menu */}
        
        <div className="py-5 lg:hidden px-5 sticky top-0 z-100 flex justify-between items-center" style={{backgroundColor: 'var(--blue-color)'}}>
            <button onClick={() => setOpenMenu(!openMenu)}>
              {
                openMenu ? <img src=".\public\images\header-close-menu-white.svg" alt="Menu" /> : <img src="..\images\header-burger-white.svg" alt="Menu" />
              }
            </button>
            <div className="flex items-center gap-2 p-2 bg-white rounded-sm">
                <input className="text-gray-500 px-5 " type="text" placeholder="Search"/> 
                <a href=""><img src=".\public\images\header-loop-blue.svg" alt="Search icon" /></a>
              </div>
            <div>
              <Link to="/" className="mb-5 md:mb-0 self-center"><img src=".\public\images\inspa-logo-white.svg" alt="Inspa logo" /></Link>
            </div>
        </div>
        <div className="lg:hidden absolute z-20 top-[100%] duration-150 bg-white font-regular w-full h-screen flex flex-col items-centerlg:w-1/4" style={{right: openMenu ? 0 : "-100%"}}>
          <Link className="py-5 w-full flex justify-center gap-3 hover:shadow-lg text-xl" onClick={() => setOpenMenu(false)} to="/">Home</Link>
           <Link className="py-5 w-full flex justify-center gap-3 hover:shadow-lg text-xl" onClick={() => setOpenMenu(false)} to="/start">Start</Link>
          <Link className="py-5 w-full flex justify-center gap-3 hover:shadow-lg text-xl" onClick={() => setOpenMenu(false)} to="/ourworks">Our works</Link>
          <Link className="py-5 w-full flex justify-center gap-3 hover:shadow-lg text-xl" onClick={() => setOpenMenu(false)} to="/designers">Designers</Link>
          <Link className="py-5 w-full flex justify-center gap-3 hover:shadow-lg text-xl" onClick={() => setOpenMenu(false)} to="/pricing">Pricing</Link>
          <Link className="py-5 w-full flex justify-center gap-3 hover:shadow-lg text-xl" onClick={() => setOpenMenu(false)} to="/aboutus">About us</Link>
          <Link className="py-5 w-full flex justify-center gap-3 hover:shadow-lg text-xl" onClick={() => setOpenMenu(false)} to="/contact">Contact</Link>
          <Link className="py-5 w-full flex justify-center gap-3 hover:shadow-lg text-xl " onClick={() => setOpenMenu(false)} to="/blog">Blog</Link>
          <div className="flex gap-7">
            <button
              className="py-5 w-full justify-center gap-3 hover:shadow-lg text-xl flex gap-2 items-center"
              onClick={() => setModalActive(true)}>
              <span>Sign up</span> <img className="h-5" src="./public/images/login.svg" alt="" />
            </button>
            <AuthModal active={modalActive} setActive={setModalActive} />
          </div>
          {/* <div className="border-b-3" style={{borderBottomColor:'var(--blue-color)'}}></div> */}
          
          <Link className="py-5 w-full flex justify-center gap-3 hover:shadow-lg text-xl" style={{borderBottomColor:'var(--blue-color)'}} onClick={() => setOpenMenu(false)} to="/myaccount">My account <img src=".\public\images\header\my-account.svg" alt="Icon of user" /></Link>
          <Link className="py-5 w-full flex justify-center gap-3 hover:shadow-lg text-xl" onClick={() => setOpenMenu(false)} to="/dashboard">Dashboard <img src=".\public\images\header\dashboard.svg" alt="Icon of dashboard" /></Link>
          <Link className="py-5 w-full flex justify-center gap-3 hover:shadow-lg text-xl" onClick={() => setOpenMenu(false)} to="/notifications">Notifications <img src=".\public\images\header\notification.svg" alt="Icon of notification" /></Link>
      </div>
    </header>
  )
}

export default Header
