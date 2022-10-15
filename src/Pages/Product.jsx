import axios from "axios";
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import "../Sass/product.scss"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import '../Slider/slider.product.scss'

function Products(props) {
  const { _id } = useParams()
  const [product, setProduct] = useState("loading")

  console.log("product =", product.description)

  useEffect(() => {
    axios.get(`/product/${_id}`)
      .then(response => { console.log(response.data); setProduct(response.data) })
      .catch(err => console.log(err))
  }, [_id]);

  if (product === "loading") { return <div>Loading...</div> }

  return (
    <div className="product">
      <div className="ProductName">
        <h2>{product.category}</h2>
        <h2>{product.name}</h2>
      </div>

      <div className="productImages">
        <Carousel showThumbs={false} showStatus={false}>
          {product.images.map(imageUrl => (
            <div key={imageUrl}>
              <img src={imageUrl} alt="" />
            </div>
          ))}
        </Carousel>
      </div>

      {
        product.description &&
        <div className="productDescription">
          <p>{product.description}</p>
        </div>
      }

      <div className="productArray">
        <table>
          <tbody>
            {
              product.details.map(el => (
                <tr key={el._id}>
                  <td>{el.name}</td>
                  <td>{el.value}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>

      <h2 className="productPrice">{product.price.value} €</h2>

      <h4 className="availability">AVAILABILITY:
        {
          product.stock > 0
            ? <span className="isAvailable">IN STOCK</span>
            : <span className="isNotAvailable">OUT OF STOCK</span>
        }
      </h4>

      <div className="productAddToCart">
        {
          product.stock > 0
            ? <img onClick={e => props.addProductToCart(product._id)} src="https://res.cloudinary.com/shalltear/image/upload/v1664820508/Projet%203/cartLogo_wzapnc.svg" alt="" />
            : <img className="outOfStock" src="https://res.cloudinary.com/shalltear/image/upload/v1664820508/Projet%203/cartLogo_wzapnc.svg" alt="" />
        }
      </div>
    </div>
  )
}

export default Products;
