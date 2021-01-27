import React, { 
  useEffect, 
  useState,
  useContext
} from "react"
import { useParams } from "react-router-dom"
import { fetchProducts } from "../services"
import ItemList from "./ItemList"
import { LayoutContext } from "../context"


const ItemListContainer = () => {
  const [products, setProducts] = useState()
  const { categoryId } = useParams()

  const { setIsShowingLoader } = useContext(LayoutContext)

  useEffect(() => {
    setIsShowingLoader(true)
    fetchProducts(categoryId)
    .then(result => {
      setProducts(result)
      setIsShowingLoader(false)
    })
  }, [categoryId])

  return <div 
            className="container item-list">
              {products && <ItemList 
                  items={products} 
                />}
          </div>
}

export default ItemListContainer
