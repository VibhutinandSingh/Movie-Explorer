import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'
import { SearchProvider } from '../context/SearchContext'

function Layout() {
  return (
    <div className='min-h-screen flex flex-col'>
      <SearchProvider>
      <Navbar />
      <main className='flex-1'>
      <Outlet />
      </main>
      <Footer />
      </SearchProvider>
    </div>
  )
}

export default Layout
