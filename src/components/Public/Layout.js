import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarLoader from './Navbar/NavbarLoader'
import Footer from './Footer/Footer'

export default function Layout() {
  return (
    <div>
        <NavbarLoader />
        <Outlet />
        <Footer />
    </div>
  )
}
