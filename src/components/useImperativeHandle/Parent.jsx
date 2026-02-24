import { useRef } from "react"
import Counter from "./Counter";



const Parent = () => {
    const counterRef = useRef();

  return (
    <div>
        <Counter ref={counterRef}/>
        <button style={{border:"2px solid black",padding:"5px",borderRadius:"8px"}} onClick={() => counterRef.current.reset()}>
            Reset from Parent
        </button>
        <button style={{border:"2px solid black",padding:"5px",borderRadius:"8px"}} onClick={() => counterRef.current.increment()}>
            Increment from Parent
        </button>

    </div>
  )
}

export default Parent