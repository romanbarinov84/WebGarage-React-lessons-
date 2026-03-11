

const users = [
    {id:"1",name:"Ivanov Ivan",bio:"Photograph and designer"},
    {id:"2",name:"Pavliv Valeriy",bio:"Polit-technologist and layer"},
    {id:"3",name:"Victorov Abrams",bio:"Inspector and Anarchist"},
    {id:"4",name:"Mainenko Slipki",bio:"Maker and Pizza maker"},
    {id:"5",name:"Solodova Irina",bio:"Promo agent and RFC specialist"}
]

import { useState } from "react";
import { useNavigate, useParams } from "react-router";


const UserPage = () => {
  const { userId } = useParams(); 
  const [inputId , setInputId] = useState("");
  const navigate = useNavigate();

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "#e6f7ff",
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
      padding: "20px",
    },
    title: {
      fontSize: "2.5rem",
      color: "#005b99",
      marginBottom: "20px",
    },
    message: {
      fontSize: "1.2rem",
      color: "#333",
      maxWidth: "600px",
      lineHeight: "1.5",
    },
  };

  const defaultUser = {id:0,name:"*********",bio:"**********"}

  const user = users.find((user) => user.id == Number(userId)) || defaultUser

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/user/${inputId}`)

  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>User Page</h1>
      <p style={styles.message}>
        You are viewing the page for user with ID: <strong>{userId}</strong>
      </p>
      <p style={{color:"green",fontSize:"32px",fontWeight:'bold'}}>Name:{user.name}</p>
      <p style={{color:"blue",fontSize:"32px",fontWeight:'bold'}}>B.I.O : {user.bio}</p>
      

      <form onSubmit={handleSubmit}>

         <label >
        Найти пользователя
        <input type="number" min="1" placeholder="Введите id пользователя" style={{border:"2px solid black",marginLeft:"5px"}} value={inputId} onChange={(e) => setInputId(e.target.value)} />
      </label>
      <button type="submit">Отправить</button>
      </form>
     
    </div>
  );
};

export default UserPage;