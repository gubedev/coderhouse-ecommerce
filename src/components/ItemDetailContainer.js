import React, { useEffect, useState } from "react"
import { fetchProduct } from "../services/api.mock"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
  const [product, setProduct] = useState()

  useEffect(() => {
    getItems()
  }, [])

  const getItems = () => {
    fetchProduct().then(result => {
      setProduct(result)
    })
  }

  return (
    <>
      <div className="container pt-1">
          {product ? 
            <ItemDetail item={product} /> 
            : <div>Cargando...</div>
          }
        </div>
    </>
  )
}

export default ItemDetailContainer
