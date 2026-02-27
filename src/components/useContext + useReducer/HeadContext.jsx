import CartProvider from "./CartProvider"
import Provider from "./Provider"



const HeadContext = () => {
  return (
    <CartProvider>
    <Provider/>
    </CartProvider>
  )
}

export default HeadContext