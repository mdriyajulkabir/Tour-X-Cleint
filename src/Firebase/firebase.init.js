import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializetionAuthentication = ()=>{
    return initializeApp(firebaseConfig);
}

export default initializetionAuthentication;