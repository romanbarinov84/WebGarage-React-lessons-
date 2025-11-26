import Button from "../Button/Button"
import "./Header.css"

function Header() {

  const handleRegistration = () => {
    alert("вы зарегистрировались")
  }
  const handleAutorization = () => {
    alert("вы авторизовались")
  }
    const style = {
        color: "blue",
        fontSize: "1rem",
        width: "100%",
        display: "flex",
        justifyContent: "center",
    }
  return (
    <header className="container" style={style}>
        <h1>Чердак</h1>
        <Button label="Регистрация" btnStyles={{height: 20 , background: "green"}} onClick={() => handleRegistration()}/>
        <Button label="Авторизация" btnStyles={{height: 20 , background: "red"}}  onClick={() => handleAutorization()}/>
    </header>
  )
}

export default Header