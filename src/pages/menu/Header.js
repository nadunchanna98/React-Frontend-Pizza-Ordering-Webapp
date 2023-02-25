import React , { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import { BsCartCheckFill } from 'react-icons/bs';
import { Dropdown } from 'react-bootstrap';
import { BiSearchAlt } from 'react-icons/bi';
import { CartState } from '../../context/Context';

const Header = () => {

  const { cart,setCart} = CartState();
  
  return (
    <nav className="sub-navbar">
      <div className="sub-navbar__section">
        <Link to="/pizza" className="sub-navbar__link">Pizza</Link>
        <Link className="sub-navbar__link">Appetizers &amp; Others</Link>
      </div>



      <div className="sub-navbar__left_section">
        <div className="search-bar">
        <input type="text" placeholder="Search" className='search-bar__input' />
          <div className="search-bar__icon">
            <BiSearchAlt fontSize="25px" color='white'/>
          </div>
        </div>

        <Dropdown alignRight className="sub-navbar__section">
          <Dropdown.Toggle variant="success"  className='dropdown-toggle' >
            <span className='cart-count'>{cart.length}</span>
            <BsCartCheckFill color='white' fontSize="25px" />
          </Dropdown.Toggle>
          
          <Dropdown.Menu style={{ minWidth: 370 }}  >
            <span className='Your-cart-is-empty'>Your cart is empty</span>
          </Dropdown.Menu>
        </Dropdown>

      </div>

    </nav>
  );
};

export default Header;