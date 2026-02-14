import { useState } from "react"
import UserSearch from "./userSearch";



const UserComponent = () => {
const [userId , setUserId] = useState(1);
const [counter , setCounter] = useState(0);

  return (
    <div style={{display:"flex",flexDirection:"column"}}>
        <h1 style={{fontSize:"32px",color:"black",fontWeight:"bold"}}>Пример загрузки данных</h1>
        <label style={{color:"blue",fontSize:"16px",display:"flex",flexDirection:"column",width:"10%"}}>Введите id пользователя
            <input style={{border:"2px solid black" , marginLeft:"5px"}} type="number"
            value={userId}
            onChange={(e) => setUserId(Number(e.target.value))}
            />
        </label>
        
        <div>
            <UserSearch userId={userId}/>
        </div>

        <button style={{border:"2px solid blue" , padding:"5px" , width:"200px",marginTop:"10px",borderRadius:"8px" , background:"pink"}} 
          onClick={() => setCounter(counter + 1)}
          >Увеличить счетчик :{counter}</button>
    </div>

    
  )
}

export default UserComponent