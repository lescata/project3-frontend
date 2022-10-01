import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Login from "./Pages/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
