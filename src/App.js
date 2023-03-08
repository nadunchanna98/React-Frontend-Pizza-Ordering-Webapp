import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
 
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import Navbar from './layout/Navbar';
import Users from './pages/users/Users';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Menu from './pages/menu/Menu';
import Offers from './pages/Offers';
import AddUser from './pages/users/AddUser';
import EditUser from './pages/users/EditUser';
import ViewUser from './pages/users/ViewUser';
import CartPage from './pages/menu/CartPage';
import Header from './pages/menu/Header';
import AddItem from './pages/items/AddItem';
import Items from './pages/items/Items';
import ViewItem from './pages/items/ViewItem';
import EditItem from './pages/items/EditItem';
import Checkout from './pages/payments/Checkout';
import Footer from './layout/Footer';

function App() {

  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route  path="/users" exact element={<Users />} />
          <Route  path="/" exact element={<Home />} />
          <Route  path="/contact" exact element={<Contact />} />
          <Route  path="/menu" exact element={<Menu />} />
          <Route  path="/offers" exact element={<Offers />} />
          <Route  path="/users/add" exact element={<AddUser />} />
          <Route  path="/users/edit/:id" exact element={<EditUser />} /> 
          <Route  path="/users/view/:id" exact element={<ViewUser />} />
          <Route  path="/cartpage" exact element={<CartPage />} />
          <Route  path="/header" exact element={<Header />} />
          <Route  path="/items/add" exact element={<AddItem />} />
          <Route  path="/items" exact element={<Items />} />
          <Route  path="/items/view/:id" exact element={<ViewItem />} />
          <Route  path="/items/edit/:id" exact element={<EditItem />} />
          <Route  path="/checkout" exact element={<Checkout />} />

        </Routes>

        <Footer/>
      </Router>

    
    </div>
  );
}

export default App;
