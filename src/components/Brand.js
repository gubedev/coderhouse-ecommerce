import React from "react"
import { NavLink } from "react-router-dom"
import "./Brand.css"

const Brand = () => {
  return (
    <h1>
      <NavLink to="/" exact>
        <span className="brand">tiendacoder</span>
      </NavLink>
    </h1>
  )
}

export default Brand
