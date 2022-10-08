import "../Sass/signup.scss";

function Signup() {
  return (
    <div className="signup">
      <h1 className="heading">JOIN US today</h1>
      <div className="signup-info">
        <input
          type="firstName"
          placeholder="First Name"
          className="firstName"
          required
        />
        <input
          type="lastName"
          placeholder="Last Name"
          className="lastName"
          required
        />
        <input type="email" placeholder="Email" className="email" required />
        <input
          type="password"
          placeholder="Password"
          className="password"
          required
        />
        <input
          type="passwordConfirm"
          placeholder="Password Confirmation"
          className="passwordConfirm"
          required
        />
        <div className="login-btn">Signup!</div>{" "}
      </div>
    </div>
  );
}
export default Signup;
