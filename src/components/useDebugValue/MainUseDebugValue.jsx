import { useState, useDebugValue } from "react";

// Кастомный хук для счётчика
function useCounter(initial) {
  const [count, setCount] = useState(initial);

  // useDebugValue показывает count в React DevTools
  useDebugValue(count, c => `Count value: ${c}`);

  return [count, setCount];
}

const MainUseDebugValue = () => {
  const [count, setCount] = useCounter(0); // используем кастомный хук

  return (
    <div style={{ display: "flex", flexDirection: "column", maxWidth: "100px", gap: "20px" }}>
      <h1>useDebugValue</h1>
      <button
        style={{ border: "2px solid black", padding: "2px" }}
        onClick={() => setCount(count + 1)}
      >
        +1
      </button>
      <button
        style={{ border: "2px solid black", padding: "2px" }}
        onClick={() => setCount(count - 1)}
      >
        -1
      </button>
      <span style={{ color: "red", fontSize: "32px" }}>{count}</span>
    </div>
  );
};

export default MainUseDebugValue;