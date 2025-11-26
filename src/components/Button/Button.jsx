


function Button() {

    const handleClick = () => {
        alert("Меня нажали")
    }

  return (
    <button className="apple-btn" onClick={handleClick}>
       Нажми
    </button>
  )
}

export default Button