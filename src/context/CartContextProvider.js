import React, { useState } from "react"
import { CartContext } from "./CartContext"

export function CartContextProvider({ children }) {
  const [items, setItems] = useState([])

  const addItem = (item, quantity) => {
    const cartContainItem = items.find(i => i.item.id === item.id)

    let updatedItems = cartContainItem
      ? items.map(cartItem => (cartItem.item.id === item.id ? { ...cartItem, quantity: cartItem.quantity + quantity } : cartItem))
      : [...items, { item, quantity }]

    setItems(updatedItems)
  }

  const removeItem = itemId => {
    const updatedItems = items.filter(cartItem => cartItem.item.id !== itemId)
    setItems(updatedItems)
  }

  const clear = () => {}

  const isInCart = id => {}

  return <CartContext.Provider value={{ addItem, removeItem, clear, isInCart, items }}>{children}</CartContext.Provider>
}
