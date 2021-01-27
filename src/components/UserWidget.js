import React, { useContext } from "react"
import { AuthContext } from "../context"

const UserWidget = () => {
  const { userlogged } = useContext(AuthContext)

  return (
    <>
      {userlogged && (
        <div className="flex pr-1">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-user"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div style={{paddingLeft: ".5em"}}>
            {userlogged}
          </div>
        </div>
      )}
    </>
  )
}

export default UserWidget
