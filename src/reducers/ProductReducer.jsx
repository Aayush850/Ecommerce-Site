const reducer = (state, action) => {
  if (action.type === "GET_PRODUCTS") {
    return {
      ...state,
      products: action.payload,
      filteredProducts: action.payload,
      loading: false,
    };
  } else if (action.type === "GET_SINGLE_PRODUCT") {
    return { ...state, loading: false, singleProduct: action.payload };
  } else if (action.type === "SET_LOADING_TRUE") {
    return { ...state, loading: true };
  } else if (action.type === "SET_ERROR_TRUE") {
    return { ...state, loading: false, error: true };
  } else if (action.type === "SET_SINGLE_PRODUCT_ERROR_TRUE") {
    return { ...state, loading: false, single_product_error: true };
  } else if (action.type === "UPDATE_FILTERS") {
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  } else if (action.type === "FILTER_PRODUCTS") {
    const { filteredProducts, filters, products } = state;
    let tempProducts = [...filteredProducts];

    if (filters.category === "all") {
      tempProducts = products;
    }

    if (filters.category !== "all") {
      tempProducts = products.filter(
        (product) => product.category === filters.category
      );
    }
    if (filters.searchTerm.trim() !== "") {
      tempProducts = tempProducts.filter((product) =>
        product.title.toLowerCase().includes(filters.searchTerm)
      );
    }
    if (filters.sort === "high-low") {
      tempProducts = tempProducts.sort((a, b) => b.price - a.price);
    }
    if (filters.sort === "low-high") {
      tempProducts = tempProducts.sort((a, b) => a.price - b.price);
    }
    if (filters.sort === "a-z") {
      tempProducts = tempProducts.sort((a, b) =>
        a.title.toLowerCase().localeCompare(b.title.toLowerCase())
      );
    }
    if (filters.sort === "z-a") {
      tempProducts = tempProducts.sort((a, b) =>
        b.title.toLowerCase().localeCompare(a.title.toLowerCase())
      );
    }
    return { ...state, filteredProducts: tempProducts };
  } else if (action.type === "RESET_FILTERS") {
    return {
      ...state,
      filters: { category: "all", searchTerm: "", sort: "high-low" },
    };
  }
  return { ...state };
};

export default reducer;
