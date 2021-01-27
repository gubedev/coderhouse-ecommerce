import React, { 
  useState,
  useRef 
} from "react"
import "./CategoryMenu.css"
import { NavLink } from "react-router-dom"
import useOutsideClick from "../utils/useOutsideClick"

const CategoryMenu = () => {
  const [isActive, setIsActive] = useState(false)
  const ref = useRef(null)

  useOutsideClick(ref, () => {
    if (isActive) setIsActive(false)
  })

  return (
    <div className="dropdown" ref={ref}>
      <span onClick={() => setIsActive(!isActive)}>Categorías</span>
      {isActive && (
        <div className="dropdown-wrapper">
          <div 
            className="container dropdown-content pl-2 pr-2 pt-1 pb-1" 
            style={{ backgroundColor: "white", color: "black" }}
          >
            <div>
              <div>
                <span className="text-weight-600">Celulares y teléfonos</span>
              </div>
              <div>
                <ul>
                  <li>
                    <NavLink to="/category/celulares-y-smartphones">Celulares y smartphones</NavLink>
                  </li>
                  <li>
                    <NavLink to="/category/accesorios">Accesorios</NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div>
                <span className="text-weight-600">Computación</span>
              </div>
              <div>
                <ul>
                  <li>
                    <NavLink to="/category/notebooks">Notebooks</NavLink>
                  </li>
                  <li>
                    <NavLink to="/category/accesorios">Accesorios</NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div>
                <span className="text-weight-600">Cámaras y Accesorios</span>
              </div>
              <div>
                <ul>
                  <li>
                    <NavLink to="/category/camaras-digitales">Cámaras digitales</NavLink>
                  </li>
                  <li>
                    <NavLink to="/category/accesorios-para-camaras">Accesorios para cámaras</NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div>
                <span className="text-weight-600">Consolas y Video Juegos</span>
              </div>
              <div>
                <ul>
                  <li>
                    <NavLink to="/category/video-juegos">Video juegos</NavLink>
                  </li>
                  <li>
                    <NavLink to="/category/para-playstation">Para Playstation</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CategoryMenu
