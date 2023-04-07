import React from 'react'
import Footer from '../components/Footer'
import SiteNav from '../components/SiteNav'

const Layout = ({children}) => {
  return (
    <div>
      <SiteNav/>
       {children} 
       <Footer/>
    </div>
  )
}

export default Layout