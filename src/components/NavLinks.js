import React from "react"
import { NavLink } from 'react-router-dom'

const NavLinks = () => {
  return  <div className="menu">
  <ul>
    <li>
      <NavLink to="/category/1" className="black-text">COMPUTACION</NavLink>
    </li>
    <li>
    <NavLink to="/category/2" className="black-text">DVDs</NavLink>
    </li>
  </ul>
</div>
}

export default NavLinks
