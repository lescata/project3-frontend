import "../Sass/login.scss";

function Login() {
  return (
    <div className="login">
      <h1 className="heading">Already Have an account?</h1>
      <div className="login-connection">
        <input type="email" placeholder="email" className="email" required />
        <input
          type="password"
          placeholder="password"
          className="password"
          required
        />

        <div className="login-btn">Login</div>
      </div>
      <p className="text">New Here??</p>
      <p className="text-twoo">
        <a href="" className="text-three">
          Signup
        </a>{" "}
        and create an account TODAY!
      </p>
    </div>
  );
}

export default Login;
