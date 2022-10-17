import { useContext } from "react"
import { CartContext } from "../Context/cart.context"
import "../Sass/cart.scss"
import axios from "axios"
import { Link } from "react-router-dom"

function Cart() {
  const { cart, updateCart } = useContext(CartContext)

  // const totalPrice = useMemo(() => {
  //   return getTotalPrice()
  // }, [cart])

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
    cart.map(el=>(
      totalPrice = totalPrice + (el.price * el.quantity)
    ))
    return totalPrice
  }

  return (
    <div className="cartGlobale">
      <h1>YOUR CART</h1>
        {
          cart.length === 0
          ? <div className="cartEmpty">
            <img src="https://res.cloudinary.com/shalltear/image/upload/v1665845427/Projet%203/emptyCart_euyak0.png" alt="" />
            <h4>OOPS</h4>
            <p>Your cart is empty</p>
          </div>
          : <div className="cartList">
            {
              cart.map((cartEl,i) =>{
                  return (<div className="cart" key={cartEl._id}>
                    <div className="cartImage"><Link to={`/products/${cartEl._id}`}><img src={cartEl.image} alt="" /></Link></div>
                    <div className="cartInfos">
                      <h4><Link to={`/products/${cartEl._id}`}>{cartEl.name}</Link></h4>
                      <div className="quantityAndPrice">
                        <input type="number" min={1} value={cartEl.quantity} onChange={event=>changeQuantity(i,event)}/>
                        <span>{cartEl.price}€</span>
                      </div>
                    </div>
                    <div className="cartCross"><img onClick={()=> removeProduct(cartEl._id)}src="https://res.cloudinary.com/shalltear/image/upload/v1665428662/Projet%203/crossCart_h05y4h.png" alt="" /></div>
                  </div>)
            })
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
              <span>{getTotalPrice()} €</span>
            </div>
            <div className="toOrder">
              <span onClick={deleteCart}>Erase cart</span>
              <Link to="/Payment">ORDER</Link>
            </div>
          </div>
        }
    </div>
  )
}

export default Cart;
