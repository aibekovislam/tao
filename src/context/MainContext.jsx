import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { notify } from "../components/Toastify";
import { ACTIONS, DISHES_URL, ORDERS_URL } from "../utils/consts";

const mainContext = createContext();

export function useMainContext() {
  return useContext(mainContext);
}

const initState = {
  cart: [],
  dishes: [],
  dish: null,
  orders: [],
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.dishes:
      return { ...state, dishes: action.payload };
    case ACTIONS.cart:
      return { ...state, cart: action.payload };
    case ACTIONS.orders:
      return { ...state, orders: action.payload };
    case ACTIONS.dish:
      return { ...state, dish: action.payload };
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

  const getOrders = async () => {
    try {
      const resposne = await axios.get(`${ORDERS_URL}`);
      dispatch({
        type: ACTIONS.orders,
        payload: resposne.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const addDish = async (data) => {
    try {
      const reponse = await axios.post(`${DISHES_URL}`, data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteDish = async (id) => {
    try {
      const response = await axios.delete(`${DISHES_URL}/${id}`);
      getDishes();
    } catch (error) {
      console.log(error);
    }
  };

  const getOneDish = async (id) => {
    try {
      const response = await axios.get(`${DISHES_URL}/${id}`);
      dispatch({
        type: ACTIONS.dish,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const editDish = async (id, data) => {
    try {
      const response = await axios.patch(`${DISHES_URL}/${id}`, data);
      getDishes();
    } catch (error) {
      console.log(error);
    }
  };

  const addOrder = async (data) => {
    try {
      const response = await axios.post(`${ORDERS_URL}`, data);
      getOrders();
    } catch (error) {
      console.log(error);
    }
  };

  const markAsServed = async (id, data) => {
    try {
      const response = await axios.patch(`${ORDERS_URL}/${id}`, data);
      console.log("patched");
      getOrders();
    } catch (error) {
      console.log(error);
    }
  };

  const value = {
    dishes: state.dishes,
    cart: state.cart,
    getDishes,
    getOrders,
    orders: state.orders,
    addDish,
    deleteDish,
    getOneDish,
    dish: state.dish,
    editDish,
    addOrder,
    markAsServed,
  };

  return <mainContext.Provider value={value}>{children}</mainContext.Provider>;
}

export default MainContext;
