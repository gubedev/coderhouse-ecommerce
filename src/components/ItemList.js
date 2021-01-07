import React from "react"
import Item from "./Item"
import "./ItemList.css"

const ItemList = ({ items }) => {
  return (
    <div className="item-list">
       {items.map(product => {
          return <Item 
            key={product.id} 
            id={product.id} 
            title={product.title} 
            pictureUrl={product.pictureUrl}
            price={product.price}
          />
        })}
    </div>
  )
}

export default ItemList
