import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;