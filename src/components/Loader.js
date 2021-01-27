import React, { useContext } from "react"
import "./Loader.css"
import { LayoutContext } from "../context"

const Loader = () => {
  const { isShowingLoader } = useContext(LayoutContext)

  return (
    <>
      {isShowingLoader && (
        <div className="loader-wrapper">
          <div className="loader">
            <div className="spinner"></div>
          </div>
        </div>
      )}
    </>
  )
}

export default Loader
