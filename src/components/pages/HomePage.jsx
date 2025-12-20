
import {  UserContext } from "../../context/UserContext"
import "./HomePage.css"
import { useContext } from "react"



function HomePage() {

  const UserArray = useContext(UserContext)
  return (
    <div>
     <p>{UserArray.id}</p>
     <p>{UserArray.name}</p>
     <p>{UserArray.phone}</p>
  
    </div>
  )
}

export default HomePage