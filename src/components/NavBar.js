import React from "react"
import "./NavBar.css"
import CartWidget from "./CartWidget"
import Brand from "./Brand"
import NavLinks from "./NavLinks"


const NavBar = () => {
  return (
    <>
      <div className="topbar">
        <div className="container">
          <div>
            <span>Teléfono: +54 333 444 5555</span>
            &nbsp;
            <span className="pl-1">email: info@coderhousecommerce.com</span>
          </div>
        </div>
      </div>

      <div className="header-mobile">
        <div className="container">
          <Brand />
          <CartWidget />
        </div>
        <div className="container">
          <div className="pt-1">
            <NavLinks />
          </div>
        </div>
      </div>

      <div className="header">
        <div className="container">
          <Brand />
          <NavLinks />
          <div className="flex">
            <CartWidget />
            <div className="pl-1">
              <strong>Bienvenido!</strong> usuario
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar
