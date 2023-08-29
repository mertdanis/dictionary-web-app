import { createContext, useContext, useEffect, useReducer } from "react";

import axios from "axios";

const MainProvider = createContext();

const initialState = {
  data: [],

  desiredWord: "keyboard",
  currentTheme: "light",

  isLoading: null,
  notFound: null,
};

function MainContext({ children }) {
  const reducer = (state, action) => {
    switch (action.type) {
      case "data":
        return {
          ...state,
          data: action.payload,
        };

      case "isLoading/true":
        return {
          ...state,
          isLoading: true,
        };

      case "isLoading/false":
        return {
          ...state,
          isLoading: false,
        };

      case "fetchData":
        return {
          ...state,
          desiredWord: action.payload,
        };

      case "changeTheme":
        return {
          ...state,
          currentTheme: state.currentTheme === "light" ? "dark" : "light",
        };

      case "notFound":
        return {
          ...state,
          notFound: true,
        };
    }
  };

  const [{ data, isLoading, desiredWord, currentTheme, notFound }, dispatch] =
    useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({
        type: "isLoading/true",
      });
      try {
        const res = await axios.get(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${desiredWord}`
        );

        dispatch({
          type: "data",
          payload: res.data,
        });
      } catch (error) {
        dispatch({
          type: "notFound",
          payload: error,
        });
      } finally {
        dispatch({
          type: "isLoading/false",
        });
      }
    };

    fetchData();
  }, [desiredWord]);

  return (
    <MainProvider.Provider
      value={{
        data,
        isLoading,
        dispatch,
        desiredWord,
        currentTheme,
        notFound,
      }}
    >
      {children}
    </MainProvider.Provider>
  );
}

const useData = () => {
  const context = useContext(MainProvider);
  return context;
};

export { MainContext, useData };
