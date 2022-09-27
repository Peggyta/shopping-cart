import React, { useContext } from 'react';
//Context
import { CartContext } from '../../context/CartContextProvider';
//Functions
import { shorten } from '../../helper/functions';
//Icons
import trashIcon from '../../assets/icons/trash.svg';


const Cart = (props) => {
    const { dispatch } = useContext(CartContext);
    const {image, title, quantity, price} = props.data;

    return (
        <div>
            <img src={ image } alt="product" />
            <div>
                <h3>{ shorten(title) }</h3>
                <p>{ price }</p>
                <div>
                    <span>{ quantity }</span>
                </div>
                <div>
                    {
                        quantity > 1 ?
                        <button onClick={() => dispatch ({type: "DECREASE", payload: props.data})}>-</button> : 
                        <button onClick={() => dispatch({type: "REMOVE_ITEM", payload: props.data})}><img src={trashIcon} alt="trash icon" style={{width:"20px"}}/></button>
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default Cart;