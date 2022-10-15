import { useNavigate } from "react-router-dom";
import { useContext } from "react"
import { AuthContext } from "../Context/auth.context"

function Payment() {
  const {isLoggedIn} = useContext(AuthContext);
  const navigate = useNavigate();

  if(!isLoggedIn){
    return navigate("/")
  }


  return <div>Payment</div>;
}

export default Payment;
