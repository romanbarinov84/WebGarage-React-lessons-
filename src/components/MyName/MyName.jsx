import Email from "../Email"
import "./MyName.css"

function MyName() {

   const name = "Roman Batinov"
   const element = <h1>Alex and {name} friends</h1>
   const cats = ["Lion","Tiger","Puma","Leopard","Pantera"];
   const condition = true;
   const response = "<div>alert(вы взломаны)</div>"

  return (
    condition && (
       <div>
      <p>{name}</p>
      <p>{element}</p>
      {3 + 6}
        <h2>My name is Roman</h2>
        <Email/>
        <br />
        <label htmlFor="email">
          <span> Введите свой имейл</span>
         
        </label>
        <br />
        <input type="text" />
        <div dangerouslySetInnerHTML={{__html:response}}></div>
        
        <ul style={{color:"yellow", fontSize: 32}}>
           {cats.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
        </ul>
       
    </div>
    )
    
   
  )
}

export default MyName