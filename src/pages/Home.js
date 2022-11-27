import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <section className="home-text">
        <h1 className="home-title">Clurr's Studio</h1>
        <h4 className="home-sub">All Things Cute & Aesthetic</h4>
        <Link to="/products" className="btn btn-enter">
          Enter
        </Link>
      </section>
    </div>
  );
};

export default Home;
