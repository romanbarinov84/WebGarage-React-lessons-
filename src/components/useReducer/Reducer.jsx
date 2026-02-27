import  { useReducer } from 'react';
import reducer from './useReducer';

const Reducer = () => {
  const initialState = {count:2};
  const [state , dispatch] = useReducer(reducer , initialState);
  
    return (
        <div>
            <h1 style={{ color: 'red', fontSize: '32px', fontWeight: 'bold' }}>
                useReducer
            </h1>
            <p style={{border:"2px solid gray",padding:"20px",fontSize:"26px",background:"lightblue",color:"white",margin:"20px",boxShadow: "0px 20px 20px 0px rgba(0, 0, 0, 0.3)"}}>{state.count}</p>
            <div style={{display:"flex",gap:"10px"}}>
              <button style={{border:"2px solid black",padding:'5px',background:"#ff6633",borderRadius:"6px",fontSize:"32px"}} onClick={() => dispatch({type:"increment"})}>+</button>
            <button style={{border:"2px solid black",padding:'5px',background:"#ff6633",borderRadius:"6px",fontSize:"32px"}} onClick={() => dispatch({type:"decrement"})}>-</button>
            <button style={{border:"2px solid black",padding:'5px',background:"#ff6633",borderRadius:"6px"}} onClick={() => dispatch({type:"reset"})}>reset</button>
            <button style={{border:"2px solid black",padding:'5px',background:"#ff6633",borderRadius:"6px"}} onClick={() => dispatch({type:"multiply",payload:10})}>multiply * 10</button>
            </div>
            
        </div>
    );
};

export default Reducer;
