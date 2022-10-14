import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import "../Sass/category.scss"

function Category(props) {
  const [products, setProducts] = useState("Loading")
  const { category } = useParams()

  useEffect(() => {
    axios.get(`/products/${category}`)
      .then(response => setProducts(response.data))
  }, [category])

  if (products === "Loading") return "loading..."

  return (
    <div className="category">
      <div className="categoryName">
        <h2>|</h2><h2>{category}</h2>
      </div>
      <div className="products">
        {
          products.map(product => (
            <div className="product" key={product._id}>
              <div className="productImagesAndInfos">
                <Link to={`/products/${product._id}`}><img src={product.images[0]} alt="" /></Link>
                <div className="productInfos">
                  <Link to={`/products/${product._id}`}><h2>{product.name}</h2></Link>
                  <Link to={`/products/${product._id}`}><h3>{product.details.map(details => <span key={details._id}>{details.value} </span>)}</h3></Link>
                </div>
              </div>
              <div className="productOther">
                <span className="productAvailability">AVAILABILITY :
                  {product.stock > 0 ? <div className="isAvailable">IN STOCK</div> : <div className="isNotAvailable">OUT OF STOCK</div>}
                </span>
                <div>
                  <span className="productPrice">{product.price.value}€ </span>
                  {
                    product.stock > 0 ?
                      <img className="cartLogo" onClick={e => props.addProductToCart(product._id)} src="https://res.cloudinary.com/shalltear/image/upload/v1664820508/Projet%203/cartLogo_wzapnc.svg" alt="" />
                      : <img className="cartLogo outOfStock" src="https://res.cloudinary.com/shalltear/image/upload/v1664820508/Projet%203/cartLogo_wzapnc.svg" alt="" />
                  }
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>);
}

export default Category;
