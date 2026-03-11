
import { Link } from "react-router";

const NotFoundPage = () => {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "#ffe6e6",
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
      padding: "20px",
    },
    title: {
      fontSize: "4rem",
      color: "#ff4d4d",
      marginBottom: "20px",
    },
    message: {
      fontSize: "1.5rem",
      color: "#333",
      marginBottom: "30px",
    },
    link: {
      fontSize: "1.2rem",
      color: "#007bff",
      textDecoration: "none",
      border: "1px solid #007bff",
      padding: "10px 20px",
      borderRadius: "5px",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <p style={styles.message}>Oops! The page you are looking for does not exist.</p>
      <Link to="/" style={styles.link}>
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;