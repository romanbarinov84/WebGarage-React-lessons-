import { useState, useMemo } from "react";

function App() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");

  const plusOne = useMemo(() => {
    console.log("считаем plusOne");
    return count + 1;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Plus one: {plusOne}</p>

      <button onClick={() => setCount(count + 1)}>+1</button>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="печатай что угодно"
      />
    </div>
  );
}

export default App;
