import React ,{ useState }  from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

const Checkout = () => {

    const [cardNumber, setCardNumber] = useState('');
    const [cardName, setCardName] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    // const [email, setEmail] = useState('');
    // const [address, setAddress] = useState('');
    // const [phone, setPhone] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle payment processing logic here
      };

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <div className="row">
        <div className="column">
          <form onSubmit={handleSubmit}>

          {/* <div className="form-group">
            <div className="form-group-email">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="example@example.com"
                required
              />
            </div>
            </div>
            
            <div className="form-group">
            <div className="form-group-email">
              <label htmlFor="address">Address</label>
              <textarea
                id="address"
                name="address"
                value={address}
                onChange={(event) => setAddress(event.target.value)}
                placeholder="Enter your address"
                required
              />
            </div>
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone number</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                placeholder="0778897895"
                maxLength="10"
                required
              />

            </div> */}



            <div className="form-group">
              <label htmlFor="cardNumber">Card Number</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={cardNumber}
                onChange={(event) => setCardNumber(event.target.value)}
                placeholder="1234 5678 9012 3456"
                maxLength="19"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="cardName">Cardholder Name</label>
              <input
                type="text"
                id="cardName"
                name="cardName"
                value={cardName}
                onChange={(event) => setCardName(event.target.value)}
                placeholder="John Doe"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="expiryDate">Expiry Date</label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                value={expiryDate}
                onChange={(event) => setExpiryDate(event.target.value)}
                placeholder="MM/YY"
                maxLength="5"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="cvv">CVV</label>
              <input
                type="password"
                id="cvv"
                name="cvv"
                value={cvv}
                onChange={(event) => setCvv(event.target.value)}
                placeholder="123"
                maxLength="3"
                required
              />
            </div>

            <Link to="/payment-success">
               
            </Link>
            






            <button type="submit">Submit Payment</button>
          </form>
        </div>
        <div className="column">
        </div>
      </div>
    </div>
  )
}

export default Checkout