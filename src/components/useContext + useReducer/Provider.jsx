import Cart from "./Cart"
import ProductList from "./ProductList"



const Provider = () => {
  return (
    <>
      <div style={{display:"flex",flexDirection:"column",background:"lightGray",padding:"20px",color:"white"}}>
        <h1 style={{fontSize:"32px",fontWeight:"bold"}}>Shop</h1>
</div>
        <div style={{display:"flex",justifyContent:"space-between",padding:"10px"}}>
            <div style={{border:"2px solid gray",padding:"20px",background:"#fff",borderRadius:"6px"}}>
                <ProductList/>
            </div>
            <div style={{border:"2px solid gray",padding:"20px",background:"#fff",borderRadius:"6px"}}>
                <Cart/>
            </div>
        </div>
    
    </>
  
  )
}

export default Provider