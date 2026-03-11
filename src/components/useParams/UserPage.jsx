

const users = [
    {id:"1",name:"Ivanov Ivan",bio:"Photograph and designer"},
    {id:"2",name:"Pavliv Valeriy",bio:"Polit-technologist and layer"},
    {id:"3",name:"Victorov Abrams",bio:"Inspector and Anarchist"},
    {id:"4",name:"Mainenko Slipki",bio:"Maker and Pizza maker"},
    {id:"5",name:"Solodova Irina",bio:"Promo agent and RFC specialist"}
]

import { useParams } from "react-router";

const UserPage = () => {
  const { id } = useParams(); 

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

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>User Page</h1>
      <p style={styles.message}>
        You are viewing the page for user with ID: <strong>{id}</strong>
      </p>
    </div>
  );
};

export default UserPage;