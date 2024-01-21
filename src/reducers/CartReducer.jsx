const reducer = (state, action) => {
  if (action.type === "ADD_CART_ITEM") {
    const { id, image, title, price } = action.payload;
    let itemCheck = state.cart.find((item) => item.id === id);
    if (itemCheck) {
      let tempCart = state.cart.map((item) =>
        item.id === id ? { ...item, amount: item.amount + 1 } : item
      );
      return {
        ...state,
        cart: tempCart,
      };
    }
    return {
      ...state,
      cart: [...state.cart, { id, image, title, price, amount: 1 }],
    };
  } else if (action.type === "INCREASE_AMOUNT") {
    const id = action.payload;
    let tempCart = state.cart.map((item) => {
      if (item.id == id) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    return { ...state, cart: tempCart };
  } else if (action.type === "DECREASE_AMOUNT") {
    const id = action.payload;
    let tempCart = state.cart
      .map((item) => {
        if (item.id == id) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      })
      .filter((item) => !item.amount < 1);
    return { ...state, cart: tempCart };
  } else if (action.type === "REMOVE_ITEM") {
    const id = action.payload;
    let tempCart = state.cart.filter((item) => item.id !== id);
    return { ...state, cart: tempCart };
  } else if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  } else if (action.type === "CALCULATE_TOTALS") {
    const cartTotals = state.cart.reduce(
      (accumulator, item) => {
        return {
          totalItems: accumulator.totalItems + item.amount,
          totalPrice: accumulator.totalPrice + item.amount * item.price,
        };
      },
      { totalItems: 0, totalPrice: 0 }
    );
    return {
      ...state,
      totalItems: cartTotals.totalItems,
      totalAmount: cartTotals.totalPrice,
    };
  }
  return { ...state };
};

export default reducer;
