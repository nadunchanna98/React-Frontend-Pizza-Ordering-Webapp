import React, { useContext, useState } from 'react';
import '../../App.css';
import SingleItem from './SingleItem';
import { CartState } from '../../context/Context';
import  Header from './Header';
import Filter from './Filter';

const Menu = () => {

 const {  state: {Products}, } = CartState();

  return (
    <div className="container">
      <h1 className="text-center">Menu</h1>
      <hr />

      <Header />
 <Filter />


        <div className="card-container">
       
      <div className="row">
        {Products.map((prod) => (
          <SingleItem
           prod={prod}
            key={prod.id}
          />
        ))}
      </div>

      </div>
    </div>
  );
};

export default Menu;
