import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offer/:id" element={<Offer />} />
        <Route path="/user/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
