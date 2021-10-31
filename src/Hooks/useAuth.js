import { useContext } from "react"
import { AuthContext } from "../Contexts/AuthProvider"

const useAuth = ()=>{
    return useContext(AuthContext);
}

export default useAuth;