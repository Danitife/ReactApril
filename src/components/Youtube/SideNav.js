import React from 'react'
import { Link } from 'react-router-dom'
const SideNav = () => {
  return (
    <div>
        <h1><Link to='/'>Content A</Link></h1>
        <h1><Link to='/contentb'>Content B</Link></h1>
    </div>
  )
}

export default SideNav