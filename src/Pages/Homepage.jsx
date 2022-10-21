import "../Sass/homepage.scss"
import Slider from "../Components/Homepage/Slider"
import Product from "../Components/Homepage/Product";
import productsJson from "../newness.json"
//import styled from '@emotion/styled'

function Homepage(props){
    return(
//        <Toto border={10}>
            <div className="homepage">
                <Slider />
                <h1>NEWNESS</h1>
                <div className="products">
                    { productsJson.map( el => <Product addProductToCart={props.addProductToCart} data={el} key={el._id} />) }
                </div>
            </div>
//        </Toto>
    )
}

// const Toto = styled.div`
//   color:red;
//   h1 {
//     border:${(props) => props.border}px solid;

//     &::hover{
//         border-color:green;
//     }
//   }

// `

export default Homepage;
