export default function Reducer(state, action) {
  if (action.type === "CLEAR_CART") {
    return { ...state, cartItems: [] };
  }

  if (action.type === "REMOVE_ITEM") {
    const filteredItem = state.cartItems.filter(
      (item) => item.id !== action.payload
    );
    return { ...state, cartItems: filteredItem };
  }

  if (action.type === "INCREASE_ITEM") {
    let newCart = state.cartItems.map((items) => {
      if (items.id === action.payload) {
        return { ...items, amount: items.amount + 1 };
      }
      return items;
    });
    return { ...state, cartItems: newCart };
  }

  if (action.type === "DECREASE_ITEM") {
    let newCart = state.cartItems
      .map((items) => {
        if (items.id === action.payload) {
          return { ...items, amount: items.amount >= 1 ? items.amount - 1 : 0 };
        }
        return items;
      })
      .filter((item) => item.amount !== 0);
    return { ...state, cartItems: newCart };
  }

  if (action.type === "GET_TOTALS") {
    let { total, amount } = state.cartItems.reduce(
      (cartTotals, cartItems) => {
        const { price, amount } = cartItems;
        const itemTotal = price * amount;

        cartTotals.total += itemTotal;
        cartTotals.amount += amount;
        return cartTotals;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    total = parseFloat(total.toFixed(2));
    return { ...state, total, amount };
  }

  return state;
}
