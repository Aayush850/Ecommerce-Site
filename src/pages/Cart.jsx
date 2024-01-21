import React from "react";
import { useCartContext } from "../context/CartContext";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    cart,
    increaseAmount,
    decreaseAmount,
    removeItem,
    clearCart,
    totalAmount,
  } = useCartContext();
  if (cart.length < 1) {
    return (
      <div className="container no-items">
        <h1>You have no items in your cart</h1>
        <Link className="addtocart_btn" to="/products">
          Shop Now
        </Link>
      </div>
    );
  }
  return (
    <div className="container">
      <h1 style={{ textAlign: "center", margin: "1rem 0" }}>Your Cart</h1>
      {cart.map((item) => {
        return (
          <div className="cart-item" key={item.id}>
            <div className="cart-item-info">
              <img src={item.image} className="cart-img" alt="" />
              <h3>{item.title}</h3>
              <p>Price: ${item.price}</p>
              <p>
                Subtotal:<span> ${(item.amount * item.price).toFixed(2)}</span>
              </p>
              <button className="reset-btn" onClick={() => removeItem(item.id)}>
                remove
              </button>
            </div>
            <div className="amount-counter">
              <button
                onClick={() => increaseAmount(item.id)}
                className="amount-btn"
              >
                <FaChevronUp />
              </button>
              <span className="item-amount">{item.amount}</span>
              <button
                onClick={() => decreaseAmount(item.id)}
                className="amount-btn"
              >
                <FaChevronDown />
              </button>
            </div>
          </div>
        );
      })}
      <hr />
      <div style={{ margin: "1rem 0" }}>
        <h3>Total: ${totalAmount.toFixed(2)}</h3>
      </div>
      <div className="cart-btn-flex">
        <button className="clear-cart-btn" onClick={clearCart}>
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
