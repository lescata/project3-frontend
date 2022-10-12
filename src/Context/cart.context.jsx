import React, { useState, useEffect } from "react";
import axios from "axios";
 
const CartContext = React.createContext();
 
function CartProviderWrapper(props) {
  const [cart, setCart] = useState("loading");
  
  useEffect(() => {
    axios.get(`/cart`)
    .then(response => {
        setCart(response.data)
    })
    .catch(err => {console.log("Error get axios app.js:", err)})
  }, []);

  function updateCart(data){ setCart(data) }
  /* 
    Functions for handling the authentication status (isLoggedIn, isLoading, user)
    will be added here later in the next step
  */
 
  return (
    <CartContext.Provider value={{cart, updateCart}}>
      {props.children}
    </CartContext.Provider>
  )
}
 
export { CartProviderWrapper, CartContext };