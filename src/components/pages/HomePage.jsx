import { useState } from "react";

const HomePage = () => {
  const [scrollTop, setScrollTop] = useState(0); // состояние для scrollTop

  const handleScroll = (event) => {
    setScrollTop(Math.round(event.target.scrollTop)); // сохраняем значение в состояние
  };

  return (
    <div style={{ margin: 30 }}>
      <h1>HomePage</h1>
      <p>Scroll position: {scrollTop}</p>

      <div
        onScroll={handleScroll}
        style={{
          height: 300,
          width: 300,
          overflowY: "scroll", // чтобы была прокрутка
          border: "1px solid black",
        }}
      >
        <div style={{ height: 900, width: "100%", background: "#f0f0f0" }}>
          Scroll me
        </div>
      </div>
    </div>
  );
};

export default HomePage;
