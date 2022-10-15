import "../Sass/profile.scss";
import "../Sass/Onglet-Scss/onglets.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../Context/auth.context"
import axios from "axios"

function Profile() {
  const { isLoggedIn } = useContext(AuthContext);
  const [ firstName, setFirstName ] = useState("")
  const [ lastName, setLastName ] = useState("")
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")
  const [ number, setNumber ] = useState("")
  const [ street, setStreet ] = useState("")
  const [ city, setCity ] = useState("")
  const [ country, setCountry ] = useState("")

  const [ message, setMessage] = useState("")

  const navigate = useNavigate();

  useEffect(() => {
    //axios.defaults.headers['Authorization'] = `Bearer ${localStorage.getItem("authToken")}`;
    axios.get("/profile")
      .then(response => {
        //console.log(response.data)
        const { firstName, lastName, email } = response.data
        const { number, street, city, country } = response.data.address
        
        firstName && setFirstName(firstName)
        lastName  && setLastName(lastName)
        email     && setEmail(email)
        number    && setNumber(number)
        street    && setStreet(street)
        city      && setCity(city)
        country   && setCountry(country)
      })
  }, [isLoggedIn])

  if (!isLoggedIn) {
    return navigate("/")
  }

  function updateProfile(e){
    e.preventDefault();
    axios.put("/profile", { firstName, lastName, email, number, street, city, country, password })
    .then(response=> setMessage(response.data.message))
    .catch(err=> console.log(err))
  };

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
      <form onSubmit={updateProfile}>
        <div className="info-Details">
          <input type="firstName" placeholder="First Name" className="firstName" value={firstName} onChange={(e)=> setFirstName(e.target.value)} />
          <input type="lastName" placeholder="Last Name" className="lastName" value={lastName} onChange={(e)=> setLastName(e.target.value)} />
          <input type="email" placeholder="Email" className="email" required value={email} onChange={(e)=> setEmail(e.target.value)} />
          <input type="password" placeholder="Password" className="password" value={password} onChange={(e)=> setPassword(e.target.value)} />
        </div>
        <div className="address">
          <h1 className="heading">ADDRESS</h1>
          <div className="street">
            <input type="number" placeholder="N°" className="number" value={number} onChange={(e)=> setNumber(e.target.value)} />
            <input type="text" placeholder="Street" className="streetName" value={street} onChange={(e)=> setStreet(e.target.value)} />
          </div>

          <input type="city" placeholder="City" className="city"  value={city} onChange={(e)=> setCity(e.target.value)} />
          <input type="country" placeholder="Country" className="country"  value={country} onChange={(e)=> setCountry(e.target.value)} />
        <button>Save Profile</button>
        </div>
      </form>
      {
        message && <h4>{message}</h4>
      }
    </div>

  );
}

export default Profile;
