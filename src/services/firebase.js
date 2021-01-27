import firebase from "firebase/app"
import "@firebase/firestore"
import "@firebase/auth"

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
})

export function getFirebase() {
  return app
}

export function getFirestore() {
  return firebase.firestore(app)
}

export function getAuth() {
  return firebase.auth(app)
}
