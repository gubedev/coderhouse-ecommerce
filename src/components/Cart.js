import React, 
{ 
  useContext 
} from "react"
import { CartContext } from "../context"
import "./Cart.css"

const Cart = () => {
  const { items } = useContext(CartContext)

  return (
    <div className="container">
      <ul className="cart-items">
        {items.map(cartItem => {
            return <li key={cartItem.item.id}>
                {cartItem.item.title}, {cartItem.quantity}
            </li>
          })}
      </ul>
    </div>
  )
}

export default Cart
