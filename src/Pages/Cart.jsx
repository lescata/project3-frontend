import { useContext } from "react"
import { CartContext } from "../Context/cart.context"
import "../Sass/cart.scss"
import axios from "axios"
import { Link } from "react-router-dom"

function Cart() {
  const { cart, updateCart } = useContext(CartContext)

  if (cart === 'loading') return "loading..."

  function changeQuantity(index,event){
    let cartCopy = [...cart]
    cartCopy[index].quantity = event.target.value
    updateCart(cartCopy)

    axios.put("/cart",cartCopy)
    .then(response => updateCart(response.data))
    .catch(err=> console.log(err))
  }

  function removeProduct(_id){
    axios.delete(`/cart/${_id}`)
    .then(response=> updateCart(response.data))
    .catch(err=> console.log(err))
  }

  function deleteCart(){
    axios.delete("/cart")
    .then(()=>{updateCart([])})
    .catch(err=> console.log(err))
  }

  function getTotalPrice(){
    let totalPrice = 0
    cart.map(el=>{
      totalPrice = totalPrice + (el.price * el.quantity)
    })

    return <span>{totalPrice}€</span>
  }

  return (
    <div className="cartGlobale">
      <h1>YOUR CART</h1>
        {
          cart.length === 0 ? <div>Cart Empty</div> :
          <div className="cartlist">
            {
              cart.map((cartEl,i) =>(
                  <div className="cart" key={cartEl._id}>
                    <div className="cartImage"><img src={cartEl.image} alt="" /></div>
                    <div className="cartInfos">
                      <h4>{cartEl.name}</h4>
                      <div className="quantityAndPrice">
                        <input type="number" min={1} value={cartEl.quantity} onChange={event=>changeQuantity(i,event)}/>
                        <span>{cartEl.price}€</span>
                      </div>
                    </div>
                    <div className="cartCross"><img onClick={()=> removeProduct(cartEl._id)}src="https://res.cloudinary.com/shalltear/image/upload/v1665428662/Projet%203/crossCart_h05y4h.png" alt="" /></div>
                  </div>
                ))
            }
            <div className="adressGlobale">
              <div className="adressInfos">
                <h3>Address</h3>
                <span>25 rue du poteau fuyard 75000 Paris</span>
                <div>France</div>
              </div>
              <div className="addressLink">
                <Link to="/profile">Change address</Link>
              </div>
            </div>
            <div className="totalPrice">
              <h3>TOTAL TTC</h3>
                {
                  getTotalPrice()
                }
            </div>
            <div className="toOrder">
              <span onClick={deleteCart}>Erase cart</span>
              <Link to="/orders/payment">ORDER</Link>
            </div>
          </div>
        }
    </div>
  )
}

export default Cart;
