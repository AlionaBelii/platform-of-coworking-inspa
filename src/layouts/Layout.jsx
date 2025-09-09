import React from 'react'
import { Outlet } from 'react-router'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ScrollToTop from '../small-components/ScrollToTop'
import Call from '../widgets/Call'

const Layout = () => {
  return (
    <>
    <ScrollToTop />
    <Header />
    <main className="container mx-auto px-4 flex flex-col">
      <Outlet />
    </main>
    <Footer />
    <Call />
    </>
  )
}

export default Layout
