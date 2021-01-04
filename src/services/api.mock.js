export const fetchProducts = async () => {
  const products = [
    {
      id: "1",
      title: "Camisa Tiger",
      description: "Descripcion camisa Tiger",
      price: 100,
      pictureUrl: ""
    },
    {
        id: "2",
        title: "Pantalon Tiger",
        description: "Descripcion pantalon Tiger",
        price: 100,
        pictureUrl: ""
    }
  ]

  return new Promise( function(resolve, reject) {
    setTimeout(() => {
        resolve(products)
      }, 2000)
  } )

}

export const fetchProduct = async () => {
  const product = {
      id: "1",
      title: "Camisa Tiger",
      description: "Descripcion camisa Tiger",
      price: 100,
      pictureUrl: ""
  }
  
  return new Promise( function(resolve, reject) {
    setTimeout(() => {
        resolve(product)
      }, 2000)
  } )

}
