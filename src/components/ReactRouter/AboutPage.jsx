import { Link } from "react-router";




function AboutPage() {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "50px 20px",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f5f5f5",
      minHeight: "100vh",
      color: "#333",
    },
    title: {
      fontSize: "3rem",
      margin: "20px 0",
      color: "#4caf50",
    },
    text: {
      fontSize: "1.2rem",
      maxWidth: "700px",
      textAlign: "center",
      lineHeight: "1.6",
    },
    section: {
      marginTop: "30px",
    },
  };

  return (
    <div style={styles.container}>
        <Link to={"/"}>To ahead page</Link>
      <h1 style={styles.title}>About Us</h1>
      <p style={styles.text}>
        Welcome to our website! We are dedicated to providing you with the best
        solutions and resources to make your experience enjoyable. Our team is
        passionate about delivering high-quality content and services.
      </p>

      <div style={styles.section}>
        <h2 style={styles.title}>Our Mission</h2>
        <p style={styles.text}>
          Our mission is to help people solve problems efficiently and make their
          life easier through innovative solutions and tools.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.title}>Our Team</h2>
        <p style={styles.text}>
          We are a small team of passionate developers, designers, and content
          creators working together to deliver the best experience for our users.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;