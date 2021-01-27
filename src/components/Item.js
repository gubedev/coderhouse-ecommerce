import React from "react"
import { NavLink } from "react-router-dom"
import "./Item.css"

const Item = ({ id, title, pictureUrl, price, size }) => {
  const itemClass = size === "5" ? "item-wrapper-1/5" : size === "4" ? "item-wrapper-1/4" : "item-wrapper"

  return (
    <div className={itemClass}>
      <div className="item rounded pt-1 pb-1">
        <div className="item__picture">
          <img src={pictureUrl} alt={title} />
        </div>
        <div className="item__info pl-1 pb-1">
          <NavLink to={`/item/${id}`}>
            <h4 className="text-gray text-weight-400">{title}</h4>
          </NavLink>
          <h1 className="price text-gray text-weight-400 pt-1">${price}</h1>
        </div>
      </div>
    </div>
  )
}

export default Item
