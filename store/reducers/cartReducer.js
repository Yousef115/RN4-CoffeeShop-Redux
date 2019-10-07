import * as actionTypes from "../actions/types";
const initialState = {
  items: [
    // {
    //   drink: "Latte",
    //   option: "Small",
    //   quantity: 2
    // },
    // {
    //   drink: "Espresso",
    //   option: "Large",
    //   quantity: 1
    // }
  ]
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    // ADD_ITEM
    case actionTypes.ADD_ITEM:
      // if item exists in state then just increment quantity
      const newItem = action.payload;
      // const exists = (n) => {
      //   const found = false;
      // };

      if (
        state.items.find(
          item => item.drink === newItem.drink && item.option == newItem.option
        )
      ) {
        state.items.find(
          item => item.drink === newItem.drink && item.option == newItem.option
        ).quantity += 1;
        return { ...state };
      } else {
        newItem.quantity = 1;
        return {
          ...state,
          items: state.items.concat(newItem)
        };
      }
    // REMOVE_ITEM
    case actionTypes.REMOVE_ITEM:
      const removeItem = action.payload;
      const newCart = state.items.filter(item => item !== removeItem);
      return {
        ...state,
        items: newCart
      };
    // CHECKOUT
    case actionTypes.CHECKOUT:
      return {
        ...state,
        items: []
      };
    default:
      return state;
  }
};

export default cartReducer;
