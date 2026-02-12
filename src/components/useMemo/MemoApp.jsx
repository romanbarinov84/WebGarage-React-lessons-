import { useCallback, useMemo, useState } from 'react';
import CountInfo from './CountInfo';
import Title from './Title';

const MemoApp = () => {
    const [count, setCount] = useState(0);
    const [firstHook, setFirstHook] = useState('useCallback');
    const [secondHook, setSecondHook] = useState('useMemo');
    const [dark , setDark] = useState(false);
    

    const delayedDouble = (num) => {
        for(let i = 0; i < 19999999999 ; i++){
            return num * 2
        }
    }

    const themeStyle = {
        backgroundColor: dark ? "#0e0e0f" : "#282c34"
    }

    const setDarkTheme = () => {
        setDark((prev) => !prev)
    }

    const incrementCount = () => {
        setCount((count) => count + 1);
    };

   

    const buttonStyle = useMemo(
        () => ({
            padding: '10px 20px',
            fontSize: '18px',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            backgroundColor: '#4CAF50',
            color: 'white',
            marginTop: '20px',
        }),
        [],
    );

    const hooks = useMemo(
        () => ({
            firstHook,
            secondHook,
        }),
        [firstHook, secondHook],
    );

    const resetCount = useCallback(() => {
        setCount(0);
    }, []);

    const doubleCount = delayedDouble(count)

    return (
        <div style={{...themeStyle}}>
            <Title
                hooks={hooks}
                resetCount={resetCount}
                buttonStyle={buttonStyle}
            />
            <CountInfo count={doubleCount} />
            <button style={buttonStyle} onClick={incrementCount}>
                +1
            </button>
            <button style={buttonStyle}  onClick={setDarkTheme}>Change</button>
        </div>
    );
};

export default MemoApp;
