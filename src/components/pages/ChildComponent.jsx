import { memo } from "react";



const ChildComponent = memo(({onAction}) =>  {

 console.log("Дочерний компонент отрендерен");
 
  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={onAction}>Call on action</button>
    </div>
  )
})

export default ChildComponent