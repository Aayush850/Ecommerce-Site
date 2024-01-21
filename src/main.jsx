import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ProductContextProvider } from "./context/ProductsContext.jsx";
import { CartContextProvider } from "./context/CartContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartContextProvider>
      <ProductContextProvider>
        <App />
      </ProductContextProvider>
    </CartContextProvider>
  </React.StrictMode>
);
