import { useContext, useState, useEffect } from "react"
import { CartContext } from "../Context/cart.context"
import "../Sass/cart.scss"
import axios from "axios"
import { Link } from "react-router-dom"

function Cart() {
  const { cart, updateCart } = useContext(CartContext)
  const [userInfos, setUserInfos] = useState("Loading")

  useEffect(() => {
    axios.get("/profile")
      .then(response => setUserInfos(response.data))
      .catch(() => setUserInfos("notLogged"))
  }, [])

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
  //console.log(userInfos.address)
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
                {
                  userInfos === "Loading"
                    ? <div>loading ...</div>
                    : userInfos === "notLogged" ? <span></span>
                      : userInfos.address !== undefined
                        ?<div><h3>Address</h3>{userInfos.address.number} {userInfos.address.street} <div>{userInfos.address.city}</div><div>{userInfos.address.country}</div></div>
                        :<div>Please refer an address</div>
                }



                {/* <span>25 rue du poteau fuyard 75000 Paris</span>
                <div>France</div> */}
              </div>
              {
                userInfos !== "notLogged" && 
                <div className="addressLink">
                  <Link to="/profile">Change address</Link>
                </div>
              }

            </div>
            <div className="totalPrice">
              <h3>TOTAL TTC</h3>
              <span>{getTotalPrice()} €</span>
            </div>
            <div className="toOrder">
              <span onClick={deleteCart}>Erase cart</span>

              {
                userInfos.address
                ? <Link className="cartOrder" to="/orders/payment">ORDER</Link>
                : <div className="cartOrder off">ORDER</div>
              }
              
            </div>
          </div>
        }
    </div>
  )
}

export default Cart;
