import initializetionAuthentication from "../Firebase/firebase.init";
import { getAuth, GoogleAuthProvider, signInWithPopup,onAuthStateChanged , signOut  } from "firebase/auth";
import { useEffect, useState } from "react";
initializetionAuthentication()



const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading,setLoading] = useState(true)
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const singinUsingGoogle = ()=>{
        return signInWithPopup(auth, googleProvider)   
    }

        const logOut = ()=>{
            signOut(auth).then(() => {
                setUser({})
              }).catch((error) => {
                // An error happened.
              });
        }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } else{
                setUser({})
            }
            setLoading(false)
          });
    }, []);

    return{
        user,
        singinUsingGoogle,
        logOut,
        loading
    }
};

export default useFirebase;