import { Link } from "react-router";


function HomePage() {

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f5f5f5",
    },
    header: {
      backgroundColor: "#4caf50",
      color: "white",
      padding: "40px 20px",
      textAlign: "center",
    },
    main: {
      flex: 1,
      display: "flex",
      justifyContent: "space-around",
      padding: "20px",
      flexWrap: "wrap",
    },
    feature: {
      backgroundColor: "white",
      padding: "20px",
      margin: "10px",
      width: "300px",
      borderRadius: "10px",
      boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)",
    },
    footer: {
      backgroundColor: "#222",
      color: "white",
      textAlign: "center",
      padding: "20px",
    },
    headerTitle: {
      margin: 0,
      fontSize: "2.5rem",
    },
    headerText: {
      marginTop: "10px",
      fontSize: "1.2rem",
    },
    featureTitle: {
      marginTop: 0,
      color: "#333",
    },
    featureText: {
      color: "#555",
    },
  };

  return (
    <div style={styles.container}>
        <Link to={"/About"}>About our company</Link>
      <header style={styles.header}>
        <h1 style={styles.headerTitle}>Welcome to My Website</h1>
        <p style={styles.headerText}>Your one-stop solution for everything!</p>
      </header>

      <main style={styles.main}>
        <section style={styles.feature}>
          <h2 style={styles.featureTitle}>Feature One</h2>
          <p style={styles.featureText}>
            This is a description of feature one. It's really cool!
          </p>
        </section>

        <section style={styles.feature}>
          <h2 style={styles.featureTitle}>Feature Two</h2>
          <p style={styles.featureText}>
            This is a description of feature two. Even cooler!
          </p>
        </section>
      </main>

      <footer style={styles.footer}>
        <p>© 2026 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;