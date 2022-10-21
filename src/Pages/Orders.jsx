import "../Sass/orders.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react"
import { AuthContext } from "../Context/auth.context"
import axios from "axios"

function Orders() {
  const { isLoggedIn } = useContext(AuthContext);
  const [orders, setOrders] = useState("Loading")
  const navigate = useNavigate();

  useEffect(() => {
    axios.defaults.headers['Authorization'] = `Bearer ${localStorage.getItem("authToken")}`;
    axios.get("/orders")
      .then(response => setOrders(response.data))
  }, [isLoggedIn])

  if (orders === "Loading") { return <div>Loading...</div> }
  // if (orders.length === 1) { return <div>Not order</div> }

  if (!isLoggedIn) {
    return navigate("/")
  }

  console.log("orders:",orders)

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
      {
        orders.length > 0 &&
          orders.map((order, orderIndex) => (
            <div className="order" key={order._id}>
              <div className="orderResume">
                <p className="orderDetailsTxt">Details</p>
                <p className="orderDate">Date : {order.date.substring(0,10)}</p>
                <p className="orderNumber">Order N°{ order._id.substring(0,8) }</p>
              </div>

              <div className="orderDetails">

                {
                  order.products.map((product, productIndex) => (
                    <div className="orderArticle" key={product._id}>
                      <div className="orderImage">
                        <img src={product.productId.images[0]} alt="img" />
                      </div>
                      
                      <p className="orderReference">{product.productId.name}</p>
                      <p className="orderPrice">{product.price.value} €</p>
                    </div>
                  ))
                }

                <div className="orderDetailsPrice">
                  <p className="orderTotalText">TOTAL ORDER :</p>
                  <p className="orderTotal">{order.totalPrice.value} €</p>
                </div>
              </div>
            </div>
          ))
      }
      {/* <div className="order">
        <div className="orderResume">
          <p className="orderDetailsTxt">Details</p>
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
      </div>*/}
    </div >
  );
}

export default Orders;
