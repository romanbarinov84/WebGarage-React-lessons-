import { useState } from "react"


const HomePage = () => {

  const [ text , setText] = useState("");
  const [dataObject , setDataObject] = useState({});

  const handleSubmit = (event) => {
     event.preventDefault()
    setDataObject({...dataObject , text});
    setText("");
  }
   
  const handleChange = (event) => {
    setText(event.target.value)
    
  }

  return (
    <div style={{margin: 30}}>
      <h1>HomePage</h1>
      <p>Текущее значение input: {text}</p>
      <p>Object with data : {JSON.stringify(dataObject)}</p>
      <br />
      <form onSubmit={handleSubmit}>
         <input type="text" value={text} onChange={handleChange}/>
        <button type="submit" >SEND</button>
      </form>
      
    </div>
  )
}

export default HomePage