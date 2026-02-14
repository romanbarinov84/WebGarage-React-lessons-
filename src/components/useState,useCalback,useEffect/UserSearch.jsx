import { useCallback, useEffect, useState } from "react"



const UserSearch = ({userId}) => {
    const [userData , setUserData] = useState(null);
    const [isLoading , setIsLoading] = useState(false);
    const [error , setError] = useState(null);


    const fetchUserData = useCallback(async() => {
        setIsLoading(true);
        setError(null);

        try {
            console.log("Запрос данных пользователя");
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
            if(!response.ok){
                throw new Error("Ошибка загрузки данных")
            }
            const data = await response.json();
            setUserData(data);
            console.log("Данные пользователя загружены", data);
        } catch (err) {
            setError(err.message)
            console.error("Ошибка",err);
        }finally{
            setIsLoading(false)
        }

    },[userId]);

    useEffect(() => {
        fetchUserData();

    },[fetchUserData]);
  return (
    <div>
     <h2 style={{color:"red" , fontSize:"32px",fontWeight:"bold"}}>Данные пользователя</h2>
     {isLoading && (<div style={{color:"#ff6633"}}>Loading data....</div>)}
     {error && <p style={{color:"#90cfe"}}>{error}</p>}
     {userData && (
        <div style={{display:"flex",flexDirection:"column",color:"#67cfe"}}>
            <p>NAME:  {userData.name}</p>
            <p>Email: {userData.email}</p>
            <p>Phone: {userData.phone}</p>
        </div>
     )}

    </div>
  )
}

export default UserSearch