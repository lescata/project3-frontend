import "../Sass/login.scss";

function Login() {
  return (
    <div className="login">
      <h1 className="heading">Login</h1>
      <input type="email" placeholder="email" className="email" required />
      <input
        type="password"
        placeholder="password"
        className="passeword"
        required
      />

      <div className="login-btn">Login</div>
      <p className="text">New Here??</p>
    </div>
  );
}

export default Login;
