


function Button({label,onClick,btnStyles}) {

   

  return (
    <button className="apple-btn" style={btnStyles} onClick={onClick}>
       {label}
    </button>
  )
}

export default Button