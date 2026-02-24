import { forwardRef, useImperativeHandle, useState } from "react"



const Counter = forwardRef((props , ref) => {
    const [count , setCount] = useState(0);

    useImperativeHandle(ref , () => ({
        reset(){
            setCount(0)
        },
        increment(){
            setCount(count + 1)
        }
    }));

  return (
    <div>
        <h2 style={{color:"red"}}>Count: {count}</h2>
        <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  )
})

export default Counter