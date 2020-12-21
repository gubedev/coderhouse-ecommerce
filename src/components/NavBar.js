import React from "react"
import "./NavBar.css"

const NavBar = () => {
  return (
    <>
      <div className="topbar">
        <div className="container">
          <div>
            <span>Teléfono: +54 333 444 5555</span>
            &nbsp;
            <span>email: info@coderehousecommerce.com</span>
          </div>
          <div>
            <span>Teléfono: +54 333 444 5555</span>
            &nbsp;
            <span>email: info@coderehousecommerce.com</span>
          </div>
        </div>
      </div>

      <div className="header-mobile">
        <div className="container">
          <div>
            <h1>Coderehouse shop</h1>
          </div>
          <a className="nav-toggle">
            <span></span>
          </a>
        </div>
      </div>

      <div className="nav-mobile">
        <ul className="nav-mobile-menu">
          <li className="nav-item">
            <a>MEN</a>
          </li>
          <li className="nav-item">
            <a>WOMAN</a>
          </li>
          <li className="nav-item">
            <a>KIDS</a>
          </li>
          <li className="nav-item">
            <a>FREE SHIPPING</a>
          </li>
        </ul>
      </div>

      <div className="header">
        <div className="container">
          <div>
            <h1>Coderehouse shop</h1>
          </div>
          <div className="menu">
            <ul>
              <li>
                <a>HOMBRES</a>
              </li>
              <li>
                <a>MUJERES</a>
              </li>
              <li>
                <a>NIÑOS</a>
              </li>
              <li>
                <a>ENVIOS</a>
              </li>
            </ul>
          </div>
          <div><strong>Bienvenido!</strong> usuario</div>
        </div>
      </div>
    </>
  )
}

export default NavBar
