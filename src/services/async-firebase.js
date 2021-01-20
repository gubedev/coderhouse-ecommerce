import { getFirestore } from "./firebase"

export const fetchProducts = async categoryId => {
  const db = getFirestore()
  const itemsCollection = db.collection("items")

  if (categoryId) {
    return itemsCollection
      .where("categoryId", "==", categoryId)
      .get()
      .then(querySnapshot =>
        querySnapshot.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data(),
          }
        })
      )
  }

  return itemsCollection.get()
    .then(querySnapshot =>
      querySnapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data(),
        }
      })
    )
}

export const fetchProduct = async itemId => {
  const db = getFirestore()
  const itemsCollection = db.collection("items")
  const item = itemsCollection.doc(itemId)

  return item.get()
    .then(doc => {
      return {
        id: doc.id,
        ...doc.data(),
      }
    })
}
