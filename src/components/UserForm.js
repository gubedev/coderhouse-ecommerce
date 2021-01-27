import React, { useState, useContext } from "react"
import { AuthContext } from "../context"

const UserForm = ({ submitHandler, handleClose }) => {
  const [error, setError] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { setUserlogged } = useContext(AuthContext)

  const handleSubmit = event => {
    event.preventDefault()

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setError("email incorrecto")
      return
    }

    if (email === "") {
      setError("complete password")
      return
    }

    submitHandler({ email, password })
      .then(() => { 
        setError(null) 
        handleClose()
        setUserlogged(email)
      })
      .catch(e => setError(e.message))
  }

  return (
    <>
      <div className="w-full p-2">
        <form onSubmit={handleSubmit}>
          <div>
            <input 
              type="email" 
              className="w-full p-1" 
              placeholder="Dirección de e-mail" 
              onChange={e => setEmail(e.target.value)} 
            />
          </div>
          <div>
            <input 
              type="password" 
              className="w-full mt-1 p-1" 
              placeholder="Contraseña" 
              onChange={e => setPassword(e.target.value)} 
            />
          </div>
          <div className="mt-3">
            <button className="btn w-full">Enviar</button>
          </div>
        </form>
      </div>
      {error && (
        <div className="w-full pt-1 w-full text-center">
          <span className="text-red">{error}</span>
        </div>
      )}
    </>
  )
}

export default UserForm
