import { useState } from "react";
import "./HomePage.css";

function HomePage() {
  const [color, setColor] = useState(false);

  
  const handleClick = () => {
    setColor(!color);
  };

  return (
    <>
      <div>
        <h1 style={{ color: color ? "orange" : "cornflowerblue" }}>Home Pge</h1>

        <button
          style={{ color: color ? "red" : "green" }}
          onClick={handleClick}
        >
          изменить цвет
        </button>
      </div>
    </>
  );
}

export default HomePage;
