import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import SearchBar from './SearchBar';

function Navbar() {
  return (
    <nav className='flex flex-col justify-evenly items-center md:flex-row lg:flex-row my-5'>
      <Link to="/">
        <div className='flex justify-center m-2 items-center'>
          <h1 className='text-red-900 text-4xl font-bold'>Cine </h1>
          <h1 className='text-white text-4xl font-bold'>Vault.</h1>
        </div>
      </Link>
      <SearchBar/>

      <Link to="/about">
        <h1 className='text-white mt-4 hover:text-gray-300 transition-colors duration-200'>
          ⭐About
        </h1>
      </Link>
    </nav>
  )
}

export default Navbar
