import React, { useState } from "react"
import { AuthContext } from "./AuthContext"

export function AuthContextProvider({ children }) {
  const [userlogged, setUserlogged] = useState()

  return <AuthContext.Provider 
            value={{ userlogged, setUserlogged}}
          >
            {children}
          </AuthContext.Provider>
}
