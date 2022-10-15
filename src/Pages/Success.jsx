import "../Sass/success.scss";

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
          <p>your order ID is :{}</p>
          <p>You wil receive an order confirmation email with order details.</p>
        </div>
        <div className="successLink">
          <span>Continue Shopping</span>
        </div>
      </div>
    </div>
  );
}

export default Success;
