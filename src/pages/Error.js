import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="error-page section">
      <div className="error-container">
        <h1>The page you are looking for does not exist...</h1>
        <Link to="/" className="btn btn-primary">
          Go back
        </Link>
      </div>
    </section>
  );
};

export default Error;
