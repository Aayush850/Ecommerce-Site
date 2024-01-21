import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="container about-us">
      <h1>Oops! Thats a dead end.</h1>
      <Link className="addtocart_btn" to="/">
        Back Home
      </Link>
    </div>
  );
};

export default Error;
