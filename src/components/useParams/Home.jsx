
import React from "react";

const Home = () => {
  // Стили как объект
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "#f0f8ff",
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
      padding: "20px",
    },
    title: {
      fontSize: "2.5rem",
      color: "#333",
      marginBottom: "20px",
    },
    paragraph: {
      fontSize: "1.2rem",
      color: "#555",
      maxWidth: "600px",
      lineHeight: "1.5",
    },
    button: {
      marginTop: "30px",
      padding: "10px 20px",
      fontSize: "1rem",
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to Home Page</h1>
      <p style={styles.paragraph}>
        This is a simple Home page with styles defined inside the component.
        You can modify these styles directly in the JSX object.
      </p>
      <button style={styles.button}>Click Me</button>
    </div>
  );
};

export default Home;