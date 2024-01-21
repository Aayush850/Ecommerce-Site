import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/ProductReducer";

const ProductContext = React.createContext();

const initialState = {
  loading: false,
  error: false,
  single_product_error: false,
  products: [],
  filteredProducts: [],
  filters: {
    category: "all",
    searchTerm: "",
    sort: "high-low",
  },
  singleProduct: {},
};

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchProducts = async () => {
    try {
      dispatch({ type: "SET_LOADING_TRUE" });
      const data = await fetch("https://fakestoreapi.com/products");
      const products = await data.json();
      dispatch({ type: "GET_PRODUCTS", payload: products });
      dispatch({ type: "FILTER_PRODUCTS" });
    } catch (error) {
      dispatch({ type: "SET_ERROR_TRUE" });
    }
  };

  const fetchProduct = async (id) => {
    try {
      dispatch({ type: "SET_LOADING_TRUE" });
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await res.json();
      dispatch({ type: "GET_SINGLE_PRODUCT", payload: data });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_PRODUCT_ERROR_TRUE" });
    }
  };

  const updateFilters = (e) => {
    dispatch({
      type: "UPDATE_FILTERS",
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  const resetFilters = (e) => {
    e.preventDefault();
    dispatch({
      type: "RESET_FILTERS",
    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
  }, [state.filters]);

  return (
    <ProductContext.Provider
      value={{ ...state, updateFilters, resetFilters, fetchProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const useProductContext = () => {
  return useContext(ProductContext);
};

export { ProductContextProvider, useProductContext };
