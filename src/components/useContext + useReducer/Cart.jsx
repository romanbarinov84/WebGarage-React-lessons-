import { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {
    const { state, dispatch } = useContext(CartContext);
    return (
        <div>
            <h1 style={{ fontSize: '32px', fontWeight: 'bold' }}>Cart</h1>
            {state.items.length === 0 && (
                <p style={{ color: 'red' }}>Cart is Empty</p>
            )}

            {state.items.map((item) => (
                <div
                    key={item.id}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: '10px',
                    }}
                >
                    <span style={{ flex: '1' }}> {item.name}</span>
                    <button
                        onClick={() =>
                            dispatch({ type: 'REMOVE_ITEM', payload: item.id })
                        }
                        style={{
                            border: '2px solid black',
                            background: 'lightblue',
                            color: 'white',
                            padding: '5px 10px',
                            borderRadius: '4px',
                            cursor: 'pointer',
                        }}
                    >
                        Remove
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Cart;
