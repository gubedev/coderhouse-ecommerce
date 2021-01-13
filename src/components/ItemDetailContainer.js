import React, { 
  useContext,
  useEffect, 
  useState 
} from "react"
import { useParams } from "react-router-dom"
import { 
  CartContext
} from "../context"
import { fetchProduct } from "../services/async-mocks"
import ItemDetail from "./ItemDetail"
import Loader from "./Loader"

const ItemDetailContainer = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [product, setProduct] = useState()
  const { id } = useParams()

  const { addItem } = useContext(CartContext)

  useEffect(() => {
    getItems(id)
  }, [id])

  const getItems = id => {
    setIsLoading(true)
    fetchProduct(id).then(result => {
      setProduct(result)
      setIsLoading(false)
    })
  }

  return <div 
            className="container">
              {isLoading ? <Loader /> : product ? 
              <ItemDetail 
                item={product} 
                addItem={addItem}
              /> : null}
          </div>
}

export default ItemDetailContainer
