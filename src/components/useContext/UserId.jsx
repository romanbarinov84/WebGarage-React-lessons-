import { useContext } from "react"
import { UserContext } from "./userContext"


const UserId = () => {

  const user = useContext(UserContext)
  return (
    <div style={{color:"red" , fontSize:"32px",fontWeight:"bold"}}>{user?.id}</div>
  )
}

export default UserId