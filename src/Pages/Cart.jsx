import { useContext } from "react"
import { CartContext } from "../Context/cart.context"
import "../Sass/cart.scss"
import axios from "axios"

function Cart() {
  const { cart, updateCart } = useContext(CartContext)

  if (cart === 'loading') return "loading..."

  function changeQuantity(index,event){
    let cartCopy = [...cart]
    cartCopy[index].quantity = event.target.value
    updateCart(cartCopy)

    axios.put("/cart",cartCopy)
    .catch(err=> console.log(err))
  }

  function removeProduct(_id){
    axios.delete(`/cart/${_id}`)
    .then(response=> updateCart(response.data))
    .catch(err=> console.log(err))
  }

  return (
    <div className="cartList">
      <h1>YOUR CART</h1>
        {
          cart.length === 0 ? <div> Cart Empty</div> :
          cart.map((cartEl,i) =>(
              <div className="cart" key={cartEl._id}>
                <div className="cartImage"><img src={cartEl.image} alt="" /></div>
                <div className="cartInfos">
                  <h4>{cartEl.name}</h4>
                  <div className="quantityAndPrice">
                    <input type="number" value={cartEl.quantity} onChange={event=>changeQuantity(i,event)}/>
                    <span>{cartEl.price}€</span>
                  </div>
                </div>
                <div className="cartCross"><img onClick={()=> removeProduct(cartEl._id)}src="https://res.cloudinary.com/shalltear/image/upload/v1665428662/Projet%203/crossCart_h05y4h.png" alt="" /></div>
              </div>
            ))
        }
    </div>
  )
}

export default Cart;
