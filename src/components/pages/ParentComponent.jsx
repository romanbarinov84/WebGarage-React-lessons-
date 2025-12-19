import { useCallback, useEffect, useState } from "react"
import ChildComponent from "./ChildComponent";



function ParentComponent() {
    const [count , setCount] = useState(0);
    const [otherState , setOtherState] = useState(1);

    const memoizedCallBack = useCallback(() => {
        console.log("Функция memoizedCallBack вызванна count :" , count);
        
    },[count])

    useEffect(() => {
        console.log("useefect is work");
        memoizedCallBack();
        
    },[memoizedCallBack])


  return (
    <div>
    <h1>Parent component</h1>
      <p>Current value of Count {count}</p>
      <button style={{color:"red"}} onClick={() => setCount(count + 1)}>Увеличить count</button> 
      <ChildComponent onAction={memoizedCallBack}/>
      <p>Other state : {otherState}</p>
      <button onClick={() => setOtherState(otherState + 1)}>Изменить другое состояние</button>
    </div>
  )
}

export default ParentComponent