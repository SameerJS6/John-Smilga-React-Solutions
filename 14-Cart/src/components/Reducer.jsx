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
  return state;
}
