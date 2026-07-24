import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'
import { SearchProvider } from '../context/SearchContext'

function Layout() {
  return (
    <div>
      <SearchProvider>
      <Navbar />
      <Outlet />
      <Footer />
      </SearchProvider>
    </div>
  )
}

export default Layout
