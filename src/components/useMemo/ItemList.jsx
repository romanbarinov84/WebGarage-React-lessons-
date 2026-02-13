import { useCallback, useState } from "react"
import List from "./List";
import { Item } from "./array";

const ItemList = () => {
    const [count , setCount] = useState(0);

     const handleItemClick = useCallback((id) => {
        console.log(`кликнут пункт : ${id}`);
        
    },[])

  return (
    <div>
      <h1>hello</h1>
    <button style={{border:"1px solid black", background:"red"}} onClick={() => setCount(count + 1)}>Render:{count}</button>
    <List Item={Item} onItemClick={handleItemClick}/>
    </div>
  )
}

export default ItemList