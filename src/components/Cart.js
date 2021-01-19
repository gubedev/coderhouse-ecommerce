import React, { useContext } from "react"
import { CartContext } from "../context"
import "./Cart.css"
import { NavLink } from "react-router-dom"

const Cart = () => {
  const { items, removeItem } = useContext(CartContext)

  const total = items.reduce(function (prev, cur) {
    return prev + cur.item.price * cur.quantity
  }, 0)

  const handleItemDelete = id => {
    removeItem(id)
  }

  return (
    <div className="container">
      {items.length === 0 ? (
        <div className="pt-2">
          <div className="pb-1">
            <h1 className="text-red"> No hay productos seleccionados...</h1>
          </div>
          <NavLink to="/" exact>
            <span>Seguir de compras</span>
          </NavLink>
        </div>
      ) : (
        <div className="cart pt-2">
          <div className="cart-table-container rounded">
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Eliminar</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              {items.map(cartItem => {
                return (
                  <tr key={cartItem.item.id}>
                    <td>{cartItem.item.title}</td>
                    <td>$ {cartItem.item.price}</td>
                    <td>{cartItem.quantity}</td>
                    <td><span onClick={ ()=> handleItemDelete(cartItem.item.id) }>Eliminar</span></td>
                    <td>$ {cartItem.quantity * cartItem.item.price}</td>
                  </tr>
                )
              })}
            </table>
          </div>
          <div className="cart-summary rounded">
            <div className="cart-summary__title">
              <h2 className="pl-1 pt-1 pb-1">Resumen</h2>
            </div>
            <div className="pt-1">
              <div className="flex justify-between pt-1 pb-1 pl-1 pr-1">
                <h2>Total</h2>
                <h3>$ {total}</h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
