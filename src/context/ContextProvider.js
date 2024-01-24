import axios from "axios";
import React, { createContext, useReducer } from "react";
import { API } from "../helpers/const";

export const viewContext = createContext();

const values = {};

const ContextProvider = ({ children }) => {
  const INIT_STATE = {
    todos: [],
    oneTodo: {},
  };

  const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case "GET_TODOS":
        return { ...state, todos: action.payload };
      case "GET_ONE_TODO":
        return { ...state, oneTodo: action.payload };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  //   ! ====GET =========
  const getPosts = async () => {
    const { data } = await axios(`${API}/photos`);

    dispatch({ type: "GET_TODOS", payload: data });
  };

  //   ! GET_ONE_TODO
  const getOneTodo = async (id) => {
    const { data } = await axios(`${API}/comments/${id}`);
    dispatch({
      type: "GET_ONE_TODO",
      payload: data,
    });
  };

  const values = {
    todos: state.todos,
    getPosts,
    oneTodo: state.oneTodo,
    getOneTodo,
  };

  return <viewContext.Provider value={values}>{children}</viewContext.Provider>;
};

export default ContextProvider;
