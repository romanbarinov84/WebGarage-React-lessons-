import { useContext } from "react"
import { CartContext } from "./CartContext"
import { products } from "./products";



const ProductList = () => {
    const {dispatch} = useContext(CartContext);
  return (
    <div>
        <h1 style={{fontSize:"32px",fontWeight:"bold"}}>Product List</h1>
        {products.map((product) => (
       <div key={product.id} style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
  <span style={{ flex: 1 }}>{product.name}</span>
  <button
    onClick={() => dispatch({ type: "ADD_ITEM", payload: product })}
    style={{
      border: "2px solid black",
      background: "lightblue",
      color: "white",
      padding: "5px 10px",
      borderRadius: "4px",
      cursor: "pointer"
    }}
  >
    Add
  </button>
</div>
       ))} 
    </div>
  )
}

export default ProductList