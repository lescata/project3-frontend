import "../Sass/rejected.scss";
import { useNavigate } from "react-router-dom";
import { useContext } from "react"
import { AuthContext } from "../Context/auth.context"

function Rejected() {
  const {isLoggedIn} = useContext(AuthContext);
  const navigate = useNavigate();

  if(!isLoggedIn){
    return navigate("/")
  }

  return (
    <div className="rejected">
      <div className="rejectedImg">
        <h1>Rejected</h1>
        <img
          src="https://res.cloudinary.com/dq7egs1s7/image/upload/v1665829065/image_20_naefxf.png"
          alt="ironHackRed"
        />
        <div className="tryAgainLink">Try Again</div>
      </div>
    </div>
  );
}

export default Rejected;
