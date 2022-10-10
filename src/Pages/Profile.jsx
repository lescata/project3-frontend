import "../Sass/profile.scss";
import "../Sass/Onglet-Scss/onglets.scss";
import { NavLink } from "react-router-dom";

function Profile() {
  return (
    <div className="contactDetails">
      <div className="container-onglets">
        <NavLink className="onglets" to="/profile">
          Profile
        </NavLink>
        <NavLink className="onglets" to="/orders">
          Orders
        </NavLink>
      </div>
      <h1 className="heading">YOUR CONTACT DETAILS</h1>
      <div className="info-Details">
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
      </div>
      <div className="address">
        <h1 className="heading">ADDRESS</h1>
        <div className="street">
          <input type="number" placeholder="N°" className="number" required />
          <input
            type="streetName"
            placeholder="Street Name"
            className="streetName"
            required
          />
        </div>

        <input type="city" placeholder="City" className="city" required />

        <input
          type="country"
          placeholder="Country"
          className="country"
          required
        />
      </div>
    </div>
  );
}

export default Profile;
