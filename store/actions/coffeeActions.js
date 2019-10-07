import axios from "axios";
import * as actionTypes from "./types";

export const getCoffeeShops = () => {
  return async dispatch => {
    dispatch(setCoffeeShopsLoading());
    try {
      const res = await axios.get("http://178.128.114.232/api/?format=json");
      const coffeeShops = res.data;
      dispatch({
        type: actionTypes.GET_COFFEESHOPS,
        payload: coffeeShops
      });
    } catch (err) {
      console.error("Error while fetching shops", err);
    }
  };
};

//takes an item and adds it to the cart. An item consists of a "drink", "option" and "quantity".
export const addItemToCart = addItem => {
  return {
    type: actionTypes.ADD_ITEM,
    payload: addItem
  };
};

//removes an item from the cart.
export const removeItemFromCart = removeItem => {
  return {
    type: actionTypes.REMOVE_ITEM,
    payload: removeItem
  };
};

// empties the cart.
export const checkoutCart = () => {
  return {
    type: actionTypes.CHECKOUT
  };
};

export const setCoffeeShopsLoading = () => ({
  type: actionTypes.COFFEESHOPS_LOADING
});
