import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Img/logo.png';
import '../App.css';


const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="Bootstrap" className="header-logo d-inline-block align-text-top" />
            MY PIZZA
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto">
              <li className="nav-item active">
                <Link to="/" className="nav-link">
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/menu" className="nav-link">
                  MENU
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/offers" className="nav-link">
                  OFFERS
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="/contact" className="nav-link">
                  CONTACT US
                </Link>
              </li>
            </ul>
            <div>
              <ul className="navbar-nav mr-end">
                <li className="">
                  <Link
                    to="#"
                    className="nav-link "
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Dropdown
                  </Link>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link to="/users" className="dropdown-item">
                      Users
                    </Link>
                    <Link to="/studentLoginNew" className="dropdown-item">
                      Login
                    </Link>
                    <div className="dropdown-divider"></div>
                    <Link to="/" className="dropdown-item">
                      Logout
                    </Link>
                  </div>
                </li>
                <li className="nav-item active">
                  <Link to="/cartpage" className="nav-link">
                    MY CART
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link to="/users/add" className="nav-link">
                    REGISTER
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link to="/users" className="nav-link">
                    SIGN IN
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
