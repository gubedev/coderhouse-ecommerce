import React, { 
  useEffect, 
  useState,
  useContext
} from "react"
import { useParams } from "react-router-dom"
import { fetchProducts } from "../services"
import ItemList from "./ItemList"
import Notfound from "./Notfound"
import { LayoutContext } from "../context"

const ItemListContainer = () => {
  const [products, setProducts] = useState()
  const { categoryId } = useParams()

  const { setIsShowingLoader } = useContext(LayoutContext)
  const [notfound, setNotfound] = useState(false)

  useEffect(() => {
    setNotfound(false)
    setIsShowingLoader(true)
    fetchProducts(categoryId)
    .then(result => {
      if (result.length === 0) setNotfound(true)
      setProducts(result)
      setIsShowingLoader(false)
    })
  }, [categoryId])

  return <div 
  className="container item-list">
 {notfound ? (<Notfound />) : (
 products && <ItemList 
                 items={products} 
               />
 ) }
</div>
}

export default ItemListContainer
