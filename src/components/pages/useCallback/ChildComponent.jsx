


const ChildComponent = ({onAction}) => {
  return (
    <div style={{color:"blue"}}>

        <h2>Дочерний компонент</h2>
        <button style={{boreder:"1px solid green", padding:"5px", background:"cornFlowerBlue", borderRadius:"8px" ,color:"white"}} onClick={onAction}>вызвать действие</button>
    </div>
  )
}

export default ChildComponent