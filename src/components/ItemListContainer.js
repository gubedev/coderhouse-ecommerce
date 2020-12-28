import React from "react"
import ItemCount from "./ItemCount"

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container pt-1">
      <h1>{greeting}</h1>
      <ItemCount 
          product="Camisa Tiger" 
          stock="5" 
          initial={1} 
          onAdd={(q) => console.log(q)}>
      </ItemCount>
    </div>
  )
}

export default ItemListContainer
