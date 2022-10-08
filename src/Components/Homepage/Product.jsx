import { Link } from "react-router-dom"

function Product(props){
    return(
        <div className="product">
            <Link to={props.data.href}>
                <img className="productImage" src={props.data.image} alt="" />
                <h3>{props.data.name}</h3>
            </Link>
            <div className="priceAndcartLogo">
                <h4>{props.data.price}</h4>
                <img className="cartLogo" onClick={e => props.addProductToCart(props.data._id)} src="https://res.cloudinary.com/shalltear/image/upload/v1664820508/Projet%203/cartLogo_wzapnc.svg" alt="" />
            </div>
        </div>


    )
}

export default Product