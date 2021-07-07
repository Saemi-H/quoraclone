import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyArgZVjxoim1mbOvOPzPaUaMmW-m4JL5uQ",
    authDomain: "quora-clone-a1b2d.firebaseapp.com",
    projectId: "quora-clone-a1b2d",
    storageBucket: "quora-clone-a1b2d.appspot.com",
    messagingSenderId: "486955383297",
    appId: "1:486955383297:web:7786417baeff6c68c1de00",
    measurementId: "G-YCQM38NC7C"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const auth = firebase.auth()

  const provider = new firebase.auth.GoogleAuthProvider()

  const db = firebaseApp.firestore()

  export {auth, provider}
//   한개의 선언에서 여러개를 다른 컴포넌트에서 import 해올 수 있다 {집합}

  export default db
//   오직 한 개의 모듈만 가져옴