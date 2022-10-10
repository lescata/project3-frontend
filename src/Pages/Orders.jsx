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
      <div className="orders">
        <p className="orderDetails">Details</p>
        <p className="orderDate">13/11/2021</p>
        <p className="orderNumber">N°4MQUKFYHQ7</p>
        <p className="orderShipp">Shipped on 26/05/2021</p>
        <p className="orderTracking">
          Parcel tracking : <a href="#">MZ54H0857FR</a>
        </p>
      </div>
    </div>
  );
}

export default Orders;
