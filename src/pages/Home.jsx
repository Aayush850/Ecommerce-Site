import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <section className="hero-section container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>We are changing the way people shop</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              repellat explicabo enim soluta temporibus asperiores aut obcaecati
              perferendis porro nobis.
            </p>
            <Link className="addtocart_btn" to="/products">
              Our Products
            </Link>
          </div>
          <div className="img-container">
            <img
              src="https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="hero-img"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
