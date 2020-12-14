import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyD7_I5FN9b-oOs5LYhCRtrtUh5AOwfcTGs",
  authDomain: "slnow-app.firebaseapp.com",
  databaseURL: "https://slnow-app-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "slnow-app",
  storageBucket: "slnow-app.appspot.com",
  messagingSenderId: "172580077361",
  appId: "1:172580077361:web:5d96fa567c9a6323b93a10"
})

export const auth = app.auth()
export default app
