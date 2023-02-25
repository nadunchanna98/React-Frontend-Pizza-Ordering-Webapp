import React, { useContext, useState, useEffect } from 'react';
import SingleItem from './SingleItem';
import { CartState } from '../../context/Context';
import '../../App.css';

const CartPage = () => {

    const { state: { cart }, dispatch } = CartState();

    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {

        setTotalPrice(cart.reduce((totalPrice, prod) => totalPrice + (prod.price * 1), 0).toFixed(2));

    }, [cart]);

    return (
        <div className="container">
            <h1 className="text-center">Cart</h1>
            <hr />

            <div className="card-container">
                <div className="row">
                    {cart.map((prod) => (
                        <SingleItem
                            prod={prod}
                            key={prod.id}
                        />
                    ))}
                </div>
            </div>

            


                <div className="total-container">

                <div className="total">

                    <span className="label">Total:</span>
                    <span className="value">${totalPrice}</span>
                </div>
                <button className="checkout-btn">Checkout</button>
            </div>
        </div>
    );
};

export default CartPage;
