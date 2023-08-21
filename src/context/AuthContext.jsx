import React, { createContext, useEffect, useReducer } from "react";
import { ACTIONS } from "../utils/consts";
import { useContext } from "react";
import { auth } from "../firebase.js";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { notifyError } from "../components/Toastify";
// import { notifyError } from "../components/Toastify";

const authContext = createContext();

export function useAuthContext() {
  return useContext(authContext);
}

const initState = {
  user: null,
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.user:
      return { ...state, user: action.payload };

    default:
      return state;
  }
}

function AuthContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);

  async function login({ email, password }) {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      notifyError("Wrong password/gmail");
    }
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      // console.log(user);
      dispatch({
        type: ACTIONS.user,
        payload: user,
      });
    });
  }, []);

  // function isAdmin() {
  //   if (state.user) {
  //     const bool = ADMINS.includes(state.user.email);
  //     return bool;
  //   }
  // }

  const value = {
    user: state.user,
    login,
    // isAdmin,
  };
  return <authContext.Provider value={value}>{children}</authContext.Provider>;
}

export default AuthContext;
