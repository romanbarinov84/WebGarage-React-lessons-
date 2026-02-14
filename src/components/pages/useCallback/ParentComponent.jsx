import { useCallback, useEffect, useState } from "react"
import ChildComponent from "./ChildComponent";



const ParentComponent = () => {
    
     const [count , setCount] = useState(0);
     const [otherState , setOtherState] = useState(1);

     const memoizedCallback = useCallback(() => {
        console.log("Функция memoizedCallback вызванна", count)
        
     },[count]);

     useEffect(() => {
        console.log("useEffect сработал");
        memoizedCallback();
     },[memoizedCallback])

  return (
    <div style={{color:"red"}}>
        <h1>Parent component</h1>
        <p>Текущее значение count: {count}</p>
        <button style={{boreder:"1px solid green", padding:"5px", background:"yellow", borderRadius:"8px" ,color:"white"}} onClick={() => setCount(count + 1)}>Увеличит count</button>
        <div style={{margin:"10px"}}>

             <ChildComponent onAction={memoizedCallback}/>
        </div>
       
        <p>Другое состояние : {otherState}</p>
        <button onClick={() => setOtherState(otherState + 1)}>Изменить другое состояние  {otherState}</button>
    </div>
  )
}

export default ParentComponent