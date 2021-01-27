import React from "react"
import Item from "./Item"
import "./ItemList.css"

const ItemList = ({ items }) => {
  return (
    <div className="w-full">
      <div className="item-list">
        {items.map(product => {
          return <Item 
              key={product.id} 
              id={product.id} 
              title={product.title} 
              pictureUrl={product.pictureUrl} 
              price={product.price} 
              size={"4"}
            />
        })}
      </div>
    </div>
  )
}

export default ItemList
