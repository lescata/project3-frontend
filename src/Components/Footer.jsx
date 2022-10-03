import { Link } from "react-router-dom"

function Footer(){
    return(
        <footer>
            <Link to="/cgu">C.G.U</Link>
            <Link to="/about">About us</Link>
            <Link to="/contact">Contact</Link>
        </footer>
    )
}

export default Footer