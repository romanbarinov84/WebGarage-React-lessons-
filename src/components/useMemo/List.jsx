import { memo } from "react";



export const List = memo(({Item , onItemClick}) => {

   

    console.log("Лист отрендерен заново ");
    
  return (
    <div>
     {Item.map((item) => (
        <div key={item.id} onClick={() => onItemClick(item.id)}>{item.list}</div>
     ))}

    </div>
  )
})

export default List