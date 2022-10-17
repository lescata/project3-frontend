import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/auth.context";
import "../Sass/payment.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { CartContext } from "../Context/cart.context"

function Payment() {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [pan, setPan] = useState("");
  const [name, setName] = useState("");
  const [cvv, setCvv] = useState("");
  const [expiry, setExpiry] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const { storeToken, authenticateUser } = useContext(AuthContext);
  const { cart, updateCart } = useContext(CartContext)

  if (!isLoggedIn) {
    return navigate("/");
  }

  const handleName = (e) => setName(e.target.value);
  const handlePan= (e) => setPan(e.target.value);
  const handleExpiry = (e) => setExpiry(e.target.value);
  const handleCvv= (e) => setCvv(e.target.value);
 
  function getTotalPrice(){
    let totalPrice = 0
    cart.map(el=>(
      totalPrice = totalPrice + (el.price * el.quantity)
    ))
    return totalPrice
  }

  const handlePaymentProcess = (e) => {
    e.preventDefault();
    const requestBody = { name, pan, cvv, expiry};

    axios
      .post(`/sessions`, requestBody)
      .then((response) => {
        storeToken(response.data.authToken);
        authenticateUser();

        navigate("/"); //display homepage
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="payment">
      <h1 className="heading">Payment details</h1>
      <div>
        <form onSubmit={handlePaymentProcess} className="payment-connection">
          <input
            type="number"
            placeholder="Credit Card Number"
            name="pan"
            value={pan}
            onChange={handlePan}
            className="pan"
            required
          />
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleName}
            placeholder="Card Holder Name"
            className="name"
            required
          />
          <input
            type="text"
            name="name"
            value={cvv}
            onChange={handleCvv}
            placeholder="CVV"
            className="cvv"
            required
          />
          <input
            type="month"
            min="11/22"
            max="11/32"
            placeholder="MM/YY"
            name="expiry"
            value={expiry}
            onChange={handleExpiry}
            className="expiry"
            required
          />
          <button className="payment-btn" type="submit">
            Pay {getTotalPrice}€
          </button>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
      <div className="logoPayment">
      <img src="https://res.cloudinary.com/du5v6izdd/image/upload/v1660231366/AAA%20speedrun%20/payment-type_nrni9k.png" alt="visa"/>
      </div>
    </div>
    
  );
}

export default Payment;
