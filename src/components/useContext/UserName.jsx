import { useContext } from "react";
import { UserContext } from "./userContext";





const UserName = () => {

   
   const user = useContext(UserContext)
    
    return (
        <div style={{ color: 'blue', fontSize: '32px', fontWeight: 'bold' }}>
            <h1>UserName</h1>
           <div style={{color:"black",fontSize:"20px"}}>
            <p>Name: {user?.name}</p>
           </div>
            
        </div>
    );
};

export default UserName;
