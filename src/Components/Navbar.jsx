import SearchBar from "./SearchBar"
import { Link } from "react-router-dom"
import { useState, useContext } from "react"
import { CartContext } from "../Context/cart.context"
import { AuthContext } from "../Context/auth.context"

function Navbar(){
    const [hamburgerClass, setHamburgerClass] = useState("")
    const { cart } = useContext(CartContext)
    const {isLoggedIn, logOutUser} = useContext(AuthContext);

    return(
        <div className="navbar">
            <div className="navbar-Mobile">
                <div className={`hamburgerMenu ${hamburgerClass}`}>
                    <img onClick={()=>setHamburgerClass("")} className="hamburgerCross" src="https://res.cloudinary.com/shalltear/image/upload/v1664662956/Projet%203/Group_3_y7xdiz.svg" alt=""/>
                    <div className="hamburgerLink">
                        <Link to="/category/televisions" onClick={()=>setHamburgerClass("")}><img src="https://res.cloudinary.com/shalltear/image/upload/v1664816900/Projet%203/televisions_gwtagx.svg" alt=""/> <span>Televisions</span></Link>
                        <Link to="/category/laptops" onClick={()=>setHamburgerClass("")}><img src="https://res.cloudinary.com/shalltear/image/upload/v1664816900/Projet%203/laptops_c5mkro.svg" alt="" />Laptops</Link>
                        <Link to="/category/consoles" onClick={()=>setHamburgerClass("")}><img src="https://res.cloudinary.com/shalltear/image/upload/v1664816901/Projet%203/consoles_acen0m.svg" alt="" />Consoles</Link>
                    </div>
                </div>
                <div className="navbar-firstLine">
                    <div className="begin">
                        <img onClick={()=>setHamburgerClass("open")} className="navbar-image" src="https://res.cloudinary.com/shalltear/image/upload/v1664645259/Projet%203/HamburgerLogo_zom6ni.png" alt="" />
                        <Link to="/"><img className="navbar-logo" src="https://res.cloudinary.com/shalltear/image/upload/v1664643558/Projet%203/logo_dewzrz.png" alt="" /></Link>
                    </div>
                    <div className="end">
                        {
                            isLoggedIn 
                            ?<span>
                                <img onClick={logOutUser} className="navbar-image userLogo" src="https://res.cloudinary.com/shalltear/image/upload/v1665867743/Projet%203/logOut_fek6m1.svg" alt="" />
                                <Link to="/profile"><img className="navbar-image" src="https://res.cloudinary.com/shalltear/image/upload/v1665867524/Projet%203/authOn_thwo4j.svg" alt="ouiii"/> </Link>
                            </span>
                            :<Link to="/login"><img className="navbar-image" src="https://res.cloudinary.com/shalltear/image/upload/v1665867524/Projet%203/authOff_ltkxj0.svg" alt="paslogged in"/></Link>
                            
                        }
                        <Link to="/cart"><img className="navbar-image" src="https://res.cloudinary.com/shalltear/image/upload/v1664643772/Projet%203/cart_xds8mu.svg" alt=""/></Link>
                        {
                            cart.length > 0 &&
                            <div className="infoCart">
                                {cart.length}
                            </div>
                        }
                    </div>
                </div>
                <SearchBar />
            </div>
            <div className="navbar-Desktop">

            </div>
        </div>
    )
}

export default Navbar