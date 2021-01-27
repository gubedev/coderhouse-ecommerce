import React from "react"
import "./NavBar.css"
import Brand from "./Brand"
import NavLinks from "./NavLinks"
import CategoryMenu from "./CategoryMenu"

const NavBar = () => {
  return (
    <>
      <div className="topbar">
        <div className="container">
          <div>
            <span>Teléfono: +54 333 444 5555</span>
            &nbsp;
            <span className="pl-1">email: info@tiendacoder.com</span>
          </div>
        </div>
      </div>

      <div className="header-mobile">
        <div className="container pl-1">
          <Brand />
        </div>
        <div className="container">
          <div className="pt-1">
            <NavLinks />
          </div>
        </div>
      </div>

      <div className="header">
        <div className="container pt-1">
          <Brand />
          <div style={{width: "40%"}}>
              <input 
                type="text" 
                style={{width: "100%", padding: ".5em"}} 
                placeholder="buscar entre miles de productos"
            />
          </div>
          <NavLinks />
        </div>
        <div className="container pt-1">
          <div>
            <CategoryMenu />
          </div>
          <div></div>
         
        </div>
      </div>
    </>
  )
}

export default NavBar
