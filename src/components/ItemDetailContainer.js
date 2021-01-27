import React, { 
  useContext,
  useEffect, 
  useState 
} from "react"
import { useParams } from "react-router-dom"
import { 
  CartContext
} from "../context"
import { fetchProduct } from "../services"
import ItemDetail from "./ItemDetail"
import { LayoutContext } from "../context"
import Notfound from "./Notfound"

const ItemDetailContainer = () => {
  const [product, setProduct] = useState()
  const [notfound, setNotfound] = useState(false)
  const { id } = useParams()

  const { addItem } = useContext(CartContext)
  const { setIsShowingLoader } = useContext(LayoutContext)

  useEffect(() => {
    getItems(id)
  }, [id])

  const getItems = id => {
    setIsShowingLoader(true)
    fetchProduct(id)
      .then(result => {
        if (result.title === undefined) {
          setNotfound(true)
        }
        else {
          setProduct(result)
          setNotfound(false)
        }
        setIsShowingLoader(false)
      })
  }

  return <div 
            className="container">
              {notfound ? (<Notfound />) : 
                product &&
                  <ItemDetail 
                    item={product} 
                    addItem={addItem}
                /> 
              }

            
          </div>
}

export default ItemDetailContainer
