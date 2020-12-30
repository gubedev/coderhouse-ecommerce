import React from "react"
import Item from "./Item"

const ItemList = ({ items }) => {
  return (
    <>
      <ul>
        {items.map(product => {
          return <Item 
            key={product.id} 
            title={product.title} 
          />
        })}
      </ul>
    </>
  )
}

export default ItemList
