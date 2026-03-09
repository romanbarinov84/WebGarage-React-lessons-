import React from "react";
import { Link } from "react-router";

function NotFoundPage() {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f5f5f5",
      color: "#333",
    },
    title: {
      fontSize: "5rem",
      margin: 0,
      color: "#e74c3c",
    },
    text: {
      fontSize: "1.5rem",
      margin: "20px 0",
    },
    button: {
      padding: "10px 20px",
      fontSize: "1rem",
      border: "none",
      borderRadius: "5px",
      backgroundColor: "#4caf50",
      color: "white",
      cursor: "pointer",
      transition: "0.3s",
    },
    buttonHover: {
      backgroundColor: "#45a049",
    },
  };

  
  const [hover, setHover] = React.useState(false);

  return (
    <div style={styles.container}>
         <Link to={"/"}>To ahead page</Link>
      <h1 style={styles.title}>404</h1>
      <p style={styles.text}>Oops! The page you are looking for does not exist.</p>
      <button
        style={{ ...styles.button, ...(hover ? styles.buttonHover : {}) }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => (window.location.href = "/")}
      >
        Go Home
      </button>
    </div>
  );
}

export default NotFoundPage;