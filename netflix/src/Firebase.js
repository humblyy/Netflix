// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


    import { 
      addDoc, 
      collection, 
      getFirestore } from "firebase/firestore";
 
    import {
      getAuth,
      signOut,
      signInWithEmailAndPassword,
      createUserWithEmailAndPassword,
    } from "firebase/auth";
import { toast } from "react-toastify";

    


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_API_KEY,
  authDomain: "netflixclone-9d749.firebaseapp.com",
  projectId: "netflixclone-9d749",
  storageBucket: "netflixclone-9d749.firebasestorage.app",
  messagingSenderId: "440350838859",
  appId: "1:440350838859:web:ff86765d164a3015037dce",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const db=getFirestore(app)

//sign up function
async function signup (name,email,password){
  try {
    const response=await createUserWithEmailAndPassword(auth,email,password)
    const user=response.user
    await addDoc(collection(db,"user"),{
      uid:user.uid,
      name,
      authProvider:"local",
      email
    })
  } catch (error) {
    console.log(error)
   toast.error(error.code.split("/")[1].split("-").join(" "));

    
  }
}

//sign in function

async function login(email,password){
  try {
await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
console.log(error)
toast.error(error.code.split("/")[1].split("-").join(" "));
  }
}

//logout function
function logout(){
  signOut(auth)
}
export {auth,db,login,logout,signup}