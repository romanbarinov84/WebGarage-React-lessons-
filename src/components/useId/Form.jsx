import { useId, useState } from "react"


const Form = () => {
    const formId = useId();
    const [name , setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Отправленно ${name}`)
    }
  return (
    <div>
        <button type="submit" form={formId} style={{border:"none",boxShadow:"0px 2px 4px 0px",padding:"5px",borderRadius:"6px",background:"cornFlowerBlue"}}>
            Отправить форму
        </button>
        <form id={formId} onSubmit={handleSubmit}>
            <h3 style={{color:"red",fontSize:"24px",fontWeight:'bold'}}>Простая форма</h3>
            <input 
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Введите имя"
            style={{color:"green",border:"2px solid gray",padding:"2px",margin:"5px"}}
            />
        </form>
    </div>
  )
}

export default Form