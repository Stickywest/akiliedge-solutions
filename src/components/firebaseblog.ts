import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

    apiKey: "AIzaSyDOLJSNkYHDjGq6MkuFz-TYS0FSRC6Xj_M",
  
    authDomain: "green1-7bcdd.firebaseapp.com",
  
    projectId: "green1-7bcdd",
  
    storageBucket: "green1-7bcdd.appspot.com",
  
    messagingSenderId: "140480817439",
  
    appId: "1:140480817439:web:1496acf13f7c7b93f3e82a"
  
  };
  

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };