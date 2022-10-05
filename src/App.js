import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Login from "./Pages/Login";
import About from "./Pages/About";
import Cart from "./Pages/Cart";
import Category from "./Pages/Category";
import Error from "./Pages/Error";
import Orders from "./Pages/Orders";
import Payment from "./Pages/Payment";
import Productdetails from "./Pages/Productdetails";
import Profile from "./Pages/Profile";
import Rejected from "./Pages/Rejected";
import Signup from "./Pages/Signup";
import Success from "./Pages/Success";
import Cgu from "./Pages/Cgu";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="routes">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/category/:name" element={<Category />} />
          <Route path="/error" element={<Error />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/productdetails" element={<Productdetails />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/rejected" element={<Rejected />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cgu" element={<Cgu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
