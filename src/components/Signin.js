import React, { 
  useContext, 
  useRef,
} from "react"
import UserForm from "./UserForm"
import { LayoutContext } from "../context"
import "./Signin.css"
import { doSignin } from "../services"
import useOutsideClick from "../utils/useOutsideClick"

const Signin = () => {
  const { isShowingSignin, setIsShowingSignin } = useContext(LayoutContext)
  const ref = useRef()

  useOutsideClick(ref, () => {
    if (isShowingSignin) setIsShowingSignin(false)
  })

  const handleSignin = (e) => {
    const {email, password} = e
    return doSignin( { email, password} )
  }

  return (
    <>
      {isShowingSignin && (
        <div className="signin-wrapper">
          <div className="signin rounded" ref={ref}>
            <div className="w-full w-full text-center">
              <h1 className="text-gray">Ingresar</h1>
            </div>
            <div className="w-full pt-1">
              <UserForm 
                submitHandler={handleSignin}  
                handleClose={ () => setIsShowingSignin(false) }
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Signin
