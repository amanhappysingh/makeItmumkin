import { createContext, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [auth , setAuth] =  useState({
        token : '' ,
        user : {},

    })

    const authenticate = (token , user) => {
        setAuth({
           token,
           user 
        })
    }

  return (
   <AuthContext.Provider value={{auth  , authenticate}}>
        {children}
   </AuthContext.Provider>
  )
}

export default AuthProvider
