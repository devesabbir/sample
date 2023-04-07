import React from 'react'
import SiteNav from '../components/SiteNav'

const Layout = ({children}) => {
  return (
    <div>
      <SiteNav/>
       {children} 
    </div>
  )
}

export default Layout