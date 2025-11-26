import Button from "../Button/Button";
import "./HomePage.css";

function HomePage() {
   const handleClick = () => {
        alert("Меня нажали")
    }

    const showMessage = () => {
      alert("Это другое сообщение");
    }
  return (
    <div className="home-page">
      <h2>Home pages</h2>
      <p>Welcome to our site</p>
        
      <Button label="Нажми меня" onClick={() => handleClick()}/>
        <br />
      <Button label="Какоето сообщение" onClick={() => showMessage()}/>
     
    </div>
  );
}

export default HomePage;
