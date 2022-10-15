import React, { useState, useEffect } from "react";
import axios from "axios";
import api from "../api";


const AuthContext = React.createContext();

function AuthProviderWrapper(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setisLoggedIn]= useState(false);
  const [user, setUser] = useState(null);

  const storeToken = (token) => {
    localStorage.setItem("authToken", token);
  };

  

  function isLoggedIn1(){
    setIsLoading(true)
    api().get("/session").then((response) => {
        setisLoggedIn(true)
        setUser(response.data.user)
    
    }).catch( ()=> {
        setisLoggedIn(false)
        setUser(false)
        
    }).finally(() => {
        setIsLoading(false)
    }) 
  }
 

  return (
    <AuthContext.Provider value={{ isLoggedIn, isLoading, user, storeToken }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthProviderWrapper, AuthContext };
