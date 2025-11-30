import { useState } from "react";
import "./HomePage.css";

function HomePage({ isDarkMode }) {
  const [click, setClick] = useState(0);

  const handleClick = () => {
    setClick(click + 1);
  };

  return (
    <>
      <button onClick={handleClick}>PUSH</button>

      {click !== 0 && (
        <div
          style={{
            background: isDarkMode ? "blue" : "red",
            color: isDarkMode ? "yellow" : "white",
          }}
        >
          <p>Count: {click}</p>
        </div>
      )}
    </>
  );
}

export default HomePage;
