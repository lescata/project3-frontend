import "../Sass/signup.scss";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../Context/auth.context";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  if (isLoggedIn) {
    return navigate("/");
  }

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleFirstName = (e) => setFirstName(e.target.value);
  const handleLastName = (e) => setLastName(e.target.value);

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password, lastName, firstName };
    axios
      .post(`/users`, requestBody)
      .then((response) => {
        navigate("/login");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="signup">
      <h1 className="heading">JOIN US today</h1>
      <form onSubmit={handleSignupSubmit}>
        <div className="signup-info">
          <input
            type="firstName"
            name="firstName"
            value={firstName}
            onChange={handleFirstName}
            placeholder="First Name"
            className="firstName"
            required
          />
          <input
            type="lastName"
            name="lastName"
            value={lastName}
            onChange={handleLastName}
            placeholder="Last Name"
            className="lastName"
            required
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmail}
            placeholder="Email"
            className="email"
            required
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePassword}
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
          <button className="login-btn" type="submit">
            Signup!
          </button>
          {errorMessage && <h4>{errorMessage}</h4>}
        </div>
      </form>
      <p>Already have an Account?</p>
      <Link to={"/login"}>Login</Link>
    </div>
  );
}
export default Signup;
