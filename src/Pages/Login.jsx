import "../Sass/login.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/auth.context";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const { storeToken, authenticateUser } = useContext(AuthContext);

  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  if (isLoggedIn) {
    return navigate("/");
  }

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

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
    <div className="login">
      <h1 className="heading">Already Have an account?</h1>
      <div>
        <form onSubmit={handleLoginSubmit} className="login-connection">
          <input
            type="email"
            placeholder="email"
            name="email"
            value={email}
            onChange={handleEmail}
            className="email"
            required
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePassword}
            placeholder="password"
            className="password"
            required
          />
          <button className="login-btn" type="submit">
            Login
          </button>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
      <p className="text">New Here??</p>
      <p className="text-twoo">
        <Link to="/signup" className="text-three">
          Signup
        </Link>
        and create an account TODAY!
      </p>
    </div>
  );
}

export default Login;
