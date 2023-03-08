import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import { BsCartCheckFill } from 'react-icons/bs';
import { Dropdown, FormControl } from 'react-bootstrap';

import { AiFillDelete } from 'react-icons/ai';
import { CartState } from '../../context/Context';

const Header = () => {

  const { state: { cart }, dispatch, } = CartState();

  const { productDispatch, productState: { searchQuery }, } = CartState();

  console.log(searchQuery);

  return (
    <nav className="sub-navbar">
      <div className="sub-navbar__section">
        <Link to="/pizza" className="sub-navbar__link">Pizza</Link>
        <Link className="sub-navbar__link">Appetizers & Others</Link>
      </div>



      <div className="sub-navbar__left_section">

        <FormControl
          style={{ width: 300 }}
          type="search"
          placeholder="Search "
          className="m-auto"
          aria-label="Search"
          onChange={(e) => {
            productDispatch({
              type: "FILTER_BY_SEARCH",
              payload: e.target.value,
            });
          }}
        />

        <Dropdown alignRight className="sub-navbar__section">
          <Dropdown.Toggle variant="success" className='dropdown-toggle' >
            <span className='cart-count'>{cart.length}</span>
            <BsCartCheckFill color='white' fontSize="25px" />
          </Dropdown.Toggle>

          <Dropdown.Menu style={{ minWidth: 370 }} >

            {cart.length > 0 ?
              (

                cart.map((prod) => (
                  <span className='cartitem' key={prod.id}>
                    <img
                      src={prod.image}
                      alt={prod.title}
                      className='cartItemImage'
                    />

                    <div className='cartItemDetails'>
                      <div className='cartItemList'>
                        <span className='cart-item__details__title'>{prod.name}</span>
                        <span className='cart-item__details__price'>$ {prod.price}</span>
                        <span className='cart-item__details__quantity'>{prod.qty}</span>
                      </div>
                    </div>

                    <AiFillDelete
                      fontSize='25px'
                      color='red'
                      className='cart-item__delete'
                      onClick={() =>
                        dispatch({
                          type: 'REMOVE_FROM_CART',
                          payload: prod,
                        })
                      }
                    />


                  </span>
                ))


              ) :
              (<span className='Your-cart-is-empty'>Your cart is empty</span>)
            }

            <Link to='/cartpage' className='viewcart'>
              <button className='viewcartbtn'>View Cart</button>
            </Link>

          </Dropdown.Menu>
        </Dropdown>

      </div>

    </nav>
  );
};

export default Header;