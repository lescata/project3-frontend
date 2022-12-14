import "../Sass/success.scss";
import { Link } from "react-router-dom";

function Success() {
  return (
    <div className="success">
      <div className="successImg">
        <h1>Your order has been received </h1>
        <img
          src="https://res.cloudinary.com/dq7egs1s7/image/upload/v1665830950/image_16_kmofyp.png"
          alt="image"
        />
        <div className="successText">
          <p>Thank you for your Purchase!</p>
          <p>You wil receive an order confirmation email with order details.</p>
        </div>
        <div className="successLink">
          <Link to={"/"}><span>Continue Shopping</span></Link>
        </div>
      </div>
    </div>
  );
}

export default Success;
