import React from "react"
import { NavLink } from "react-router-dom"

const Notfound = () => {
  return (
    <div className="container pt-2">
      <div className="pb-1">
        <h1 className="text-red"> No se ha encontrado lo que buscabamos...</h1>
      </div>
      <NavLink to="/" exact>
        <span>Seguir de compras</span>
      </NavLink>
    </div>
  )
}

export default Notfound
