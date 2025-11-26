import "./Footer.css";

function Footer() {
    const style = {
        color: "green",
        fontSize: "1rem",
        width: "100%",
        display: "flex",
        justifyContent: "center",
    }
  return (
    <footer className="footer" style={style}>
        <h1>
            Подвал
        </h1>
    </footer>
  )
}

export default Footer