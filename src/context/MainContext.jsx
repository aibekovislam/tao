import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { notify } from "../components/Toastify";
import { ACTIONS, DISHES_URL } from "../utils/consts";

const mainContext = createContext();

export function useMainContext() {
  return useContext(mainContext);
}

const initState = {
  cart: [],
  dishes: [],
  dish: null,
};

const spams = [];

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.dishes:
      return { ...state, dishes: action.payload };
    case ACTIONS.cart:
      return { ...state, cart: action.payload };
    default:
      return state;
  }
}

function MainContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);

  const getDishes = async () => {
    try {
      const resposne = await axios.get(`${DISHES_URL}`);
      dispatch({
        type: ACTIONS.dishes,
        payload: resposne.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const value = {
    dishes: state.dishes,
    cart: state.cart,
    getDishes,
  };

  return <mainContext.Provider value={value}>{children}</mainContext.Provider>;
}

export default MainContext;
