import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Store from "./pages/Store";
import SingleItem from "./pages/SingleItem";
import Error from "./pages/Error";

// components
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="products/:id" element={<SingleItem />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
