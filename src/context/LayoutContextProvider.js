import React, { useState } from "react"
import { LayoutContext } from "./LayoutContext"

export function LayoutContextProvider({ children }) {
  const [isShowingOverlay, setIsShowingOverlay] = useState(false)
  const [isShowingSignin, setIsShowingSignin] = useState(false)
  const [isShowingSignup, setIsShowingSignup] = useState(false)
  const [isShowingLoader, setIsShowingLoader] = useState(false)

  return <LayoutContext.Provider 
            value={{ isShowingOverlay, setIsShowingOverlay,
              isShowingSignin, setIsShowingSignin,
              isShowingSignup, setIsShowingSignup,
              isShowingLoader, setIsShowingLoader
             }}
          >
            {children}
          </LayoutContext.Provider>
}
