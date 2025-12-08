import { useState } from "react";

const MyComponent = ({ count, increment , decrement }) => {
  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Увеличить</button>
      <button onClick={decrement}>Уменьшить</button>
    </div>
  );
};

const withCounter = (WrappedComponent, initialCount = 0) => {
  return function WithCounterComponent(props) {
    const [count, setCount] = useState(initialCount);

    const increment = () => {
      setCount((prev) => prev + 1);
    };

    const decrement = () => {
      setCount((prev) => prev - 1)
    }

    return <WrappedComponent count={count} increment={increment} decrement={decrement} {...props} />;
  };
};

const EnhancedComponent = withCounter(MyComponent, 10);

export default EnhancedComponent;
