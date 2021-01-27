import React, { 
  useContext, 
  useRef
} from "react"
import UserForm from "./UserForm"
import { LayoutContext } from "../context"
import "./Signin.css"
import { doSignup } from "../services"
import useOutsideClick from "../utils/useOutsideClick"

const Signup = () => {
  const { isShowingSignup, setIsShowingSignup } = useContext(LayoutContext)
  const ref = useRef()

  useOutsideClick(ref, () => {
    if (isShowingSignup) setIsShowingSignup(false)
  })

  const handleSignup = (e) => {
    const {email, password} = e
    return doSignup( { email, password} )
  }

  return (
    <>
      { isShowingSignup && (
        <div className="signin-wrapper">
          <div className="signin rounded" ref={ref}>
            <div className="w-full text-center">
              <h1 className="text-gray">Crear cuenta</h1>
            </div>
            <div className="w-full pt-1">
              <UserForm 
                submitHandler={handleSignup} 
                handleClose={ () => setIsShowingSignup(false) }
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Signup
