import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchProducts } from "../services"
import ItemList from "./ItemList"
import Loader from "./Loader"

const ItemListContainer = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [products, setProducts] = useState()
  const { categoryId } = useParams()

  useEffect(() => {
    setIsLoading(true)
    fetchProducts(categoryId)
    .then(result => {
      console.log(result)
      setProducts(result)
      setIsLoading(false)
    })
  }, [categoryId])

  return <div 
            className="container item-list">
              {isLoading ? <Loader /> : products 
              ? <ItemList 
                  items={products} 
                /> : null}
          </div>
}

export default ItemListContainer
