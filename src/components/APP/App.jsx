import { useState } from "react";
import HomePage from "../pages/HomePage";
import ThemeToggle from "../ThemeToggle";

import "./App.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div style={{padding:20, margin: 20, gap:20 , display: "flex" , flexDirection:"column"}}>
      <HomePage isDarkMode={isDarkMode} />
      <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    </div>
  );
}

export default App;
