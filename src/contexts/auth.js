
import { useState,createContext,useEffect } from 'react'
import firebase from '../services/firebaseConnection'


export const AuthContex = createContext({})

function AuthProvider({children}){
  const [user,SetUser] = useState(null)
  const [loadingAuth,setLoadingAuth] =useState(false)
  const [loading,setLoading] = useState(true)

  useEffect(()=>{

     function loadStorage(){
        const storageUser = localStorage.getItem('SistemaUser')

        if(storageUser){
            SetUser(JSON.parse(storageUser))
            setLoading(false)
        }
        setLoading(false)

     }
    
   loadStorage()
  },[])


    return(
     <AuthContex.Provider value={{signed:!!user,user,loading}}>
         {children}
     </AuthContex.Provider>
    )
}

export default AuthProvider;

