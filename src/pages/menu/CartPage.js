import React, { useState, useEffect } from 'react';
import SingleItem from './SingleItem';
import { CartState } from '../../context/Context';
import '../../App.css';
import { Form } from 'react-bootstrap';

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

                        <div>
                            <SingleItem
                                prod={prod}
                                key={prod.id}
                            />


                            <div className="col-md-4  ">
                                <div className="card">
                                    <Form.Control
                                        as="select"
                                        value={prod.qty}
                                        onChange={(e) =>
                                            dispatch({
                                                type: "CHANGE_CART_QTY",
                                                payload: {
                                                    id: prod.id,
                                                    qty: e.target.value,
                                                },
                                            })
                                        }
                                    >
                                        {[...Array(prod.inStock).keys()].map((x) => (
                                            <option key={x + 1}>{x + 1}</option>
                                        ))}
                                    </Form.Control>

                                </div>
                            </div>

                        </div>


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
