import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import "../Sass/category.scss"

function Category() {
  const [products, setProducts] = useState([{images:[""],name:"",details:[{"value":"Loading"}],price:{"value":""}}])
  const { category } = useParams()

  useEffect(() => {
    axios.get(`http://localhost:5005/api/products/${category}`)
    .then(response => setProducts(response.data))
  }, [category])

  console.log("name",category)
  return (
    <div className="category">
    <div className="categoryName">
      <h2>|</h2><h2>{ category }</h2>
    </div>
      <div className="products">
        {
          products.map(product => (
            <div className="product">
              <div className="productImagesAndInfos">
                <Link to={`/productdetails/${product._id}`}><img src={product.images[0]} alt="" /></Link>
                <div className="productInfos">
                  <Link to={`/productdetails/${product._id}`}><h2>{product.name}</h2></Link>
                  <Link to={`/productdetails/${product._id}`}><h3>{product.details.map(details => <div>{details.value} </div> )}</h3></Link>
                </div>
              </div>
              <div className="productOther">
                <span className="productAvailability">AVAILABILITY : IN STOCK</span>
                <div>
                  <span className="productPrice">{product.price.value}€ </span>
                  <img className="cartLogo" src="https://res.cloudinary.com/shalltear/image/upload/v1664820508/Projet%203/cartLogo_wzapnc.svg" alt="" />
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>);
}

export default Category;
