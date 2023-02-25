import React from 'react';
import '../../App.css';
import { CartState } from '../../context/Context';

const SingleItem = ({ prod }) => {

 const { state: { cart}, dispatch } = CartState();

  const isInCart = cart.some((item) => item.id === prod.id);

  return (
    <div className="col-md-4  ">
      <div className="card">
        <div className="card-image">
          <img src={prod.image} alt={prod.title} />
        </div>
        <div className="card-content">
          <h2 className="card-title">{prod.title}</h2>
          <p className="card-description">{prod.description}</p>
          <div className="card-price">${prod.price}</div>
        </div>

        {
          isInCart ? (

            <button className={`remove-from-cart-button`}
              onClick={() =>  
                dispatch({
                  type: 'REMOVE_FROM_CART',
                  payload: prod,
                })
              }
            >Remove from Cart</button>

          ) : (

            <button className={`add-to-cart-button `}
              onClick={() => {
                dispatch({
                  type: 'ADD_TO_CART',
                  payload: prod,
                });
              }}
            >Add to Cart</button>

          )
        }

      </div>
    </div>
  );
};

export default SingleItem;
