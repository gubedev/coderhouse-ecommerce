import React from "react"
import "./ItemDetail.css"

const ItemDetail = ({ item }) => {
  return <div className="item-detail">
  <div className="item-detail__description">{item.description}</div>
  <div className="item-detail__picture">
      <img 
        src={item.pictureUrl} 
        alt={item.title} 
    />
  </div>
  <div className="item-detail__price">
      {item.price}
  </div>
</div>
}

export default ItemDetail
