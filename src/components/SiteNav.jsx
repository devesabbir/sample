import React from 'react'
import { Link, NavLink } from 'react-router-dom'


import logo from '../assets/images/flat-design-mc-logo-design_23-2149482035.avif'

const SiteNav = () => {
  return (
    <header className='px-5 bg-[#f8f9fd]'>
        <div className='container mx-auto flex items-center justify-between '>
         <div className="logo-wrapper basis-[30%]">
              <Link to='/'>
                  <img className='w-[80px] h-[80px] object-cover' src={logo} alt="" />
              </Link>
         </div>
          <nav className='basis-[50%]'>
              <ul className='flex items-center gap-3 justify-end flex-wrap'>
                  <li className='font-bold text-gray-700'><NavLink to={'/'}>Home</NavLink></li>
                  <li className='font-bold text-gray-700'><NavLink to={'/about'}>About</NavLink></li>
                  <li className='font-bold text-gray-700'><NavLink to={'/product'}>Product</NavLink></li>
                  <li className='font-bold text-gray-700'><NavLink to={'/contact'}>Contact</NavLink></li>
                  <li className='font-[600]'>

                   <Link to={'/booking'}><button style={{backgroundImage: `linear-gradient(61deg, rgba(115,144,255,1) 65%, rgba(236,234,234,1) 97%)`}}
                  className='px-2 py-2 text-white rounded-md hover:bg-slate-600'
                  >Book Now</button></Link>
                  </li>
              </ul>
         </nav>
     </div>
    </header>
  )
}

export default SiteNav 