import { useReducer } from "react"
import cartReducer, { CartContext } from "./CartContext"



const CartProvider = ({children}) => {
    const initialState = {
        items:[]
    }
    const [state , dispatch] = useReducer(cartReducer,initialState);

  return (
    <CartContext.Provider value={{state,dispatch}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider