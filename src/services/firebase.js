import firebase from "firebase/app"
import "@firebase/firestore"

const app = firebase.initializeApp({
  apiKey: "AIzaSyCO-Fpy80lPlEVN86-hCEhtUN1kZBRvmdE",
  authDomain: "coderhouse-ecommerce-347c9.firebaseapp.com",
  projectId: "coderhouse-ecommerce-347c9",
  storageBucket: "coderhouse-ecommerce-347c9.appspot.com",
  messagingSenderId: "426601765856",
  appId: "1:426601765856:web:87680a0a3d7b6999222985",
})

export function getFirebase() {
  return app
}

export function getFirestore() {
    return firebase.firestore(app)
  }