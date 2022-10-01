function Login() {
  return (
    <div classeName="login">
      <h1 className="heading">login</h1>
      <input type="email" placeholder="email" className="email" required />
      <input
        type="password"
        placeholder="password"
        className="passeword"
        required
      />
    </div>
  );
}

export default Login;
