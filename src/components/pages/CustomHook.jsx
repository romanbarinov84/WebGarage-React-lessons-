import useCounter from "./Hook";

const CustomHook = () => {
    const [count, increment, decrement, reset] = useCounter(0);
    return (
        <div>
            <p>Счетчик : {count}</p>
            <button onClick={increment}>прибавить</button>
            <button onClick={decrement}>убавить</button>
            <button onClick={reset}>сбросить</button>
        </div>
    );
};

export default CustomHook;
