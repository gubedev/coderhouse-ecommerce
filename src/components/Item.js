import React from "react"
import { NavLink } from 'react-router-dom'
import "./Item.css"

const Item = ( { id, title, pictureUrl, price }) => {
  return <div className="item rounded">
    <div className="item__picture">
        <img 
          src={pictureUrl} 
          alt={title} 
        />
    </div>
    <div className="item__info pl-1 pb-1">
        <NavLink to={`/item/${id}`}>
          <h4 className="text-gray text-weight-400">{title}</h4>
        </NavLink>
        <h1 className="price text-gray text-weight-400 pt-1">${price}</h1>
      </div>
  </div>
}

export default Item
