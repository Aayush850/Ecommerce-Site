import React from "react";
import { useProductContext } from "../context/ProductsContext";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
const Products = () => {
  const {
    loading,
    error,
    products,
    filteredProducts,
    filters,
    updateFilters,
    resetFilters,
  } = useProductContext();
  const categories = [
    ...new Set(products.map((product) => product.category)),
    "all",
  ];

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="container">
        <h1>Sorry, An error occured while fetching the products.</h1>
        <h2>Try reloading the page</h2>
      </div>
    );
  }

  return (
    <section className="products-section container">
      <div className="filter-options">
        <form>
          <input
            type="text"
            value={filters.searchTerm}
            placeholder="search"
            name="searchTerm"
            onChange={updateFilters}
          />
          <div className="categories">
            <h4>Categories</h4>
            <select
              value={filters.category}
              name="category"
              onChange={updateFilters}
            >
              {categories.map((category, index) => {
                return (
                  <option value={category} key={index}>
                    {category}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="sort">
            <h4>Sort By</h4>
            <select value={filters.sort} name="sort" onChange={updateFilters}>
              <option value="a-z">a-z</option>
              <option value="z-a">z-a</option>
              <option value="high-low">high-low(price)</option>
              <option value="low-high">low-high(price)</option>
            </select>
          </div>
          <button className="reset-btn" onClick={resetFilters}>
            reset filters
          </button>
        </form>
      </div>
      <div className="products">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => {
            const { id, image, title, price } = product;
            return (
              <Link key={id} className="product-card" to={`/products/${id}`}>
                <img src={image} className="product-img" />
                <h3 className="product-title">
                  {title.length > 20 ? `${title.substring(0, 25)}...` : title}
                </h3>
                <p className="product-price">${price}</p>
              </Link>
            );
          })
        ) : (
          <h1>Sorry, No product matched you search filters!</h1>
        )}
      </div>
    </section>
  );
};

export default Products;
