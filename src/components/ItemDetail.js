import React, { useState } from "react"
import "./ItemDetail.css"
import ItemCount from "./ItemCount"
import { NavLink } from "react-router-dom"

const ItemDetail = ({ item }) => {
  const [count, setCount] = useState()

  return (
    <div className="item-detail rounded">
      <div className="item-detail__picture">
        <img src={item.pictureUrl} alt={item.title} />
      </div>
      <div>
        <div className="item-detail__title pl-1">
          <h2 className="text-gray text-weight-400">{item.title}</h2>
        </div>
        <div className="item-detail__price pl-1 pb-1 text-red">
          <h1 className="price text-gray text-weight-400 pt-1">${item.price}</h1>
        </div>
        <div className="item-detail__description pl-1 pb-1">
          <p>{item.description}</p>
        </div>
        {!count ? (
          <ItemCount stock={10} initial={1} onAdd={setCount} />
        ) : (
          <>
            <NavLink to="/cart" className="ml-1 btn-success">
              Terminar compra
            </NavLink>
          </>
        )}
      </div>
    </div>
  )
}

export default ItemDetail
