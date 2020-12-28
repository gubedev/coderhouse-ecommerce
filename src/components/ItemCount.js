import React, { useState } from "react"
import "./ItemCount.css"

const ItemCount = ({ product, stock, initial, onAdd }) => {
  
  const [quantity, setQuantity] = useState(initial)
  
  const onQuantityChange = e => {
    if (e === -1 && quantity === 0) return
    if (e === 1 && quantity >= stock) return
    setQuantity(quantity + e)
  }

  const handleAdd = () => {
    if (quantity === 0) return
    if (quantity > stock) return
    onAdd(quantity)
  }

  return (
    <div className="item-count">
      <div className="item-count__product">{product}</div>
      <div className="item-count__quantity">
        <div onClick={() => onQuantityChange(-1)}>-</div>
        <div>{quantity}</div>
        <div onClick={() => onQuantityChange(+1)}>+</div>
      </div>
      <div>
        <button onClick={handleAdd}>Agregar al carrito</button>
      </div>
    </div>
  )
}

export default ItemCount
