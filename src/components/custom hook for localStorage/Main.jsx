import { useState } from "react"


const Main = () => {
     
  
   
  return (
    <div>
    <h1>Hello : <spin style={{color:"red",fontSize:"24px",fontWeight:"bold"}}>{user}</spin></h1>
    <input 
    type="text" 
    value={user}
    onChange={(e) => handleSetUser(String(e.target.value))}
    placeholder="Enter your name!!!1"
    style={{border:"2px solid black"}}
    />

    </div>
  )
}

export default Main