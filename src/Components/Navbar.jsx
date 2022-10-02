import SearchBar from "./SearchBar"
import { Link } from "react-router-dom"
import { useState } from "react"

function Navbar(){
    const [hamburgerClass, setHamburgerClass] = useState("")
    
    return(
        <div className="navbar">
            <div className="navbar-Mobile">
                <div className={`hamburgerMenu ${hamburgerClass}`}>
                    <img onClick={()=>setHamburgerClass("")} src="https://res.cloudinary.com/shalltear/image/upload/v1664662956/Projet%203/Group_3_y7xdiz.svg" alt=""/>
                    <div className="hamburgerLink">
                        <Link to="#">Televisions</Link>
                        <Link to="#">Laptops</Link>
                        <Link to="#">Consoles</Link>
                    </div>
                </div>
                <div className="navbar-firstLine">
                    <div className="begin">
                        <img onClick={()=>setHamburgerClass("open")} className="navbar-image" src="https://res.cloudinary.com/shalltear/image/upload/v1664645259/Projet%203/HamburgerLogo_zom6ni.png" alt="" />
                        <Link to="#"><img className="navbar-logo" src="https://res.cloudinary.com/shalltear/image/upload/v1664643558/Projet%203/logo_dewzrz.png" alt="" /></Link>
                    </div>
                    <div className="end">
                        <Link to="#"><img className="navbar-image" src="https://res.cloudinary.com/shalltear/image/upload/v1664643772/Projet%203/user_fva09x.svg" alt=""/></Link>
                        <Link to="#"><img className="navbar-image" src="https://res.cloudinary.com/shalltear/image/upload/v1664643772/Projet%203/cart_xds8mu.svg" alt=""/></Link>
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