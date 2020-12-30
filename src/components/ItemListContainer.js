import React, { 
  useEffect, 
  useState 
} from "react"
import { fetchProducts } from "../services/fetchProducts.mock"
import ItemCount from "./ItemCount"
import ItemList from "./ItemList"

const ItemListContainer = ({ greeting }) => {
  
  const [products, setProducts] = useState()

  useEffect( () => {
    fetchProducts().then(result => {
      setProducts(result)
    })
  }, [])
  
  
  return (
    <div className="container pt-1">
      <h1>{greeting}</h1>

      {products ?  (
       <ItemList items={products} />
      ) : <div>Cargando...</div> }

      <ItemCount 
          product="Camisa Tiger" 
          stock="5" 
          initial={1} 
          onAdd={(q) => console.log(q)}>
      </ItemCount>

    </div>
  )
}

export default ItemListContainer
