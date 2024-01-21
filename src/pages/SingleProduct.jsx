import React, { useEffect } from "react";
import { useProductContext } from "../context/ProductsContext";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { useCartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
const SingleProduct = () => {
  const { id } = useParams();
  const { fetchProduct, loading, singleProduct, single_product_error } =
    useProductContext();
  const { addCartItem } = useCartContext();
  const navigate = useNavigate();

  useEffect(() => {
    fetchProduct(id);
  }, []);

  if (loading) {
    return <Loader />;
  }
  if (single_product_error) {
    return (
      <div className="container">
        <h1>{`Sorry, No Product with the id:"${id}" was found`}</h1>
      </div>
    );
  }

  const { title, image, description, price } = singleProduct;
  return (
    <div className="singleProduct container">
      <div>
        <img src={image} className="singleproduct-image" alt="" />
      </div>
      <div className="singleproduct-info">
        <h2 className="singleproduct-title">{title}</h2>
        <p className="price">Price: ${price}</p>
        <p className="description">{description}</p>
        <button
          className="addtocart_btn"
          onClick={() => {
            addCartItem(singleProduct);
            navigate("/cart");
          }}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
