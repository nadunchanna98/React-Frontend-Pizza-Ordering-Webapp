import React, {  useState, createContext , useReducer , useContext } from 'react';
import { cartReducer } from './Reducers';


 const CartContext = createContext()

const Context = ({ children }) => {

    const products = [
        {
          id: 1,
          name: 'Margherita',
          description: 'Tomato sauce, mozzarella cheese, fresh basil',
          image: 'https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg',
          price: 9.99
        },
        {
          id: 2,
          name: 'Pepperoni',
          description: 'Tomato sauce, mozzarella cheese, pepperoni',
          image: 'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-sliced-into-six-slices_141793-2157.jpg?w=360',
          price: 11.99
        },
        {
          id: 3,
          name: 'Hawaiian',
          description: 'Tomato sauce, mozzarella cheese, ham, pineapple',
          image: 'https://s1.1zoom.me/b4763/272/Fast_food_Pizza_Tomatoes_Wood_planks_Foliage_513340_1920x1080.jpg',
          price: 10.99
        },
        {
          id: 4,
          name: 'Veggie',
          description: 'Tomato sauce, mozzarella cheese, bell peppers, onions, mushrooms',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRK8Jz6-uCzTJaABCO0CqzJgwccxnwM-exP2ZmVFcwync-CA4VwigdOcyV0_NoSaprwrk&usqp=CAU',
          price: 12.99
        },
        {
          id: 5,
          name: 'Meat Lovers',
          description: 'Tomato sauce, mozzarella cheese, sausage, pepperoni, bacon',
          image: 'https://s1.1zoom.me/b6049/920/Pizza_Cheese_Piece_540633_1920x1080.jpg',
          price: 13.99
        },
        {
          id: 6,
          name: 'BBQ Chicken',
          description: 'BBQ sauce, mozzarella cheese, grilled chicken, red onions',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRK8Jz6-uCzTJaABCO0CqzJgwccxnwM-exP2ZmVFcwync-CA4VwigdOcyV0_NoSaprwrk&usqp=CAU',
          price: 12.99
        },
        {
          id: 7,
          name: 'Buffalo Chicken',
          description: 'Buffalo sauce, mozzarella cheese, grilled chicken, red onions',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWzSaO9mcEvW25w7CaVQpRBLG3WgATxN46xjFO5dpleua-eeq7snVAXHxDZ2VBWAOFoyA&usqp=CAU',
          price: 13.99
        },
        {
          id: 8,
          name: 'Mushroom',
          description: 'Tomato sauce, mozzarella cheese, mushrooms',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWzSaO9mcEvW25w7CaVQpRBLG3WgATxN46xjFO5dpleua-eeq7snVAXHxDZ2VBWAOFoyA&usqp=CAU',
          price: 10.99
        },
        {
          id: 9,
          name: 'Sausage and Peppers',
          description: 'Tomato sauce, mozzarella cheese, sausage, bell peppers, onions',
          image: 'https://s1.1zoom.me/b6049/920/Pizza_Cheese_Piece_540633_1920x1080.jpg',
          price: 12.99
        },
        {
          id: 10,
          name: 'White Pizza with Spinach and Garlic',
          description: 'Garlic sauce, mozzarella cheese, spinach, garlic',
          image: 'https://rare-gallery.com/uploads/posts/548360-pizza.jpg',
          price: 11.99
          },
          {
          id: 11,
          name: 'Chicken Alfredo',
          description: 'Alfredo sauce, mozzarella cheese, grilled chicken, broccoli',
          image: 'https://rare-gallery.com/uploads/posts/548360-pizza.jpg',
          price: 13.99
          },
          {
          id: 12,
          name: 'Chicken Bacon Ranch',
          description: 'Ranch sauce, mozzarella cheese, grilled chicken, bacon',
              
          image: 'https://s1.1zoom.me/b6049/920/Pizza_Cheese_Piece_540633_1920x1080.jpg',
          price: 12.99
          },
      
      ];
     

    //   console.log(products)

    const [cart, setCart] = useState([])

 const [state, dispatch] = useReducer(cartReducer, {

        Products : products,
        cart: [],

 })

    return (
        <CartContext.Provider value={{

            cart,
            setCart,
            state,
            dispatch

        }}>

            {children}
        </CartContext.Provider>
    )
}

export default Context;

export const CartState = () => {
    return useContext( CartContext);
}