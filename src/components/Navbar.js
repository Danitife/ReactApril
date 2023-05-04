import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <div>
        <nav className='navbar'>
          <Link to="/" className="navbar-brand">{props.user}</Link>
          <ul className="nav">
            <li className="nav-item">
              <Link to="/users" className="nav-link">Users</Link>
            </li>
            <li className="nav-item">
              <Link to="/daniel" className="nav-link">Daniel</Link>
            </li>
          </ul>
        </nav>
    </div>
  )
}

export default Navbar