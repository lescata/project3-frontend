import "../Sass/homepage.scss"
import Slider from "../Components/Slider"
import Product from "../Components/Homepage/Product";
import productsJson from "../newness.json"

function Homepage(){


    return(
        <div className="homepage">
            <Slider />
            <h1>NEWNESS</h1>
            <div className="products">
                { productsJson.map( el => <Product data={el} key={el.id} />) }
            </div>
        </div>
    )
}

export default Homepage;
