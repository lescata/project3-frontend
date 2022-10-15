import { NavLink } from "react-router-dom";
import "../Sass/orders.scss";

function Orders() {
  return (
    <div className="orderHistory">
      <div className="container-onglets">
        <NavLink className="onglets" to="/profile">
          Profile
        </NavLink>
        <NavLink className="onglets" to="/orders">
          Orders
        </NavLink>
      </div>
      <h1>HISTORY OF YOUR ORDERS</h1>
      <div className="orderBorder">
        <div className="orders">
          <p className="orderOpenDetails">Details</p>
          <p className="orderDate">13/11/2021</p>
          <p className="orderNumber">N°4MQUKFYHQ7</p>
          <p className="orderShipp">Shipped on 26/05/2021</p>
          <p className="orderTracking">
            Parcel tracking : <a href="/blabla">MZ54H0857FR</a>
          </p>
        </div>
        <div className="orderDetails">
          <div className="orderArticle">
            <img
              src="https://media.ldlc.com/r374/ld/products/00/05/98/23/LD0005982349.jpg"
              alt="img"
            />
            <p className="orderReference">Audio-Technica ATH-M50xBT2DS Bleu</p>
            <p className="orderPrice">399,95€</p>
            
          </div>

          <div className="orderDetailsPrice">
            <p className="orderTotalText">TOTAL ORDER :</p>
            <p className="orderTotal">399,95€</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
