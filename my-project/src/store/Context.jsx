import { createContext, useContext, useEffect, useReducer } from "react";

import axios from "axios";

const MainProvider = createContext();

const initialState = {
  data: [],

  inputWord: "",
  isLoading: null,
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

      case "inputValue":
        return {
          ...state,
          inputWord: action.payload,
        };
    }
  };

  const [{ data, isLoading, inputWord }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const controller = new AbortController();

  useEffect(() => {
    const fetchData = async () => {
      dispatch({
        type: "isLoading/true",
      });
      try {
        const res = await axios.get(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${inputWord}`,
          {
            signal: controller.signal,
          }
        );
        controller.abort();
        dispatch({
          type: "data",
          payload: res.data,
        });
      } catch (error) {
        console.log(error);
      } finally {
        dispatch({
          type: "isLoading/false",
        });
      }
    };

    fetchData();
  }, [inputWord]);

  return (
    <MainProvider.Provider
      value={{
        data,
        isLoading,
        dispatch,
        inputWord,
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
