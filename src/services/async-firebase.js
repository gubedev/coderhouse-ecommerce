import { getFirestore, getAuth } from "./firebase"
import firebase from "firebase/app"
import "@firebase/firestore"

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

  return itemsCollection.get().then(querySnapshot =>
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

export const doSignup = async payload => {
  const auth = getAuth()
  const { email, password } = payload
  return auth.createUserWithEmailAndPassword(email, password)
}

export const doSignin = async payload => {
  const auth = getAuth()
  const { email, password } = payload
  return auth.signInWithEmailAndPassword(email, password)
}

export const saveOrder = async payload => {
  const db = getFirestore()
  const orders = db.collection("orders")

  const order = {
    ...payload,
    date: firebase.firestore.Timestamp.fromDate(new Date())
  }
  
  return orders.add(order)
  .then(doc => {
    return {
      id: doc.id
    }
  })
}