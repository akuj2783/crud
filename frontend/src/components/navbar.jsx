import React from 'react'
import { NavLink } from 'react-router-dom'
import '../stylesheets/Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <NavLink to='/' className='home'>Home</NavLink>
        <NavLink to='/item/new' className='newItem'>Add Item</NavLink>
    </nav>
  )
}

export default Navbar
