import React, { useContext } from "react"
import { NavLink } from "react-router-dom"
import CartWidget from "./CartWidget"
import { AuthContext, LayoutContext } from "../context"
import UserWidget from "./UserWidget"

const NavLinks = () => {
  const { setIsShowingSignin, setIsShowingSignup } = useContext(LayoutContext)
  const { userlogged } = useContext(AuthContext)
  return (
    <div className="flex">
      {!userlogged && (
        <div 
          className="pl-1 text-right" 
          onClick={() => setIsShowingSignup(true)}
        >
          <NavLink to="/signup">Crear cuenta</NavLink>
        </div>
      )}
      {!userlogged && (
        <div 
          className="pl-1 text-right" 
          onClick={() => setIsShowingSignin(true)}
        >
          <span>Ingresar</span>
        </div>
      )}
      <div className="pl-1">
        <UserWidget />
      </div>
      <div>
        <NavLink to="/checkout">
          <CartWidget />
        </NavLink>
      </div>
    </div>
  )
}

export default NavLinks
