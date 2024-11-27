import { useReducer } from "react";

const DEFAULT_REVIEW_STATE = {
  name: "",
  text: "",
  rating: 5,
};

const SET_NAME_ACTION = "SET_NAME";
const SET_TEXT_ACTION = "SET_TEXT";
const INCREMENT_RATING_ACTION = "INCREMENT_RATING";
const DECREMENT_RATING_ACTION = "DECREMENT_RATING";
const CLEAR_ACTION = "CLEAR";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case SET_NAME_ACTION:
      return { ...state, name: payload };
    case SET_TEXT_ACTION:
      return { ...state, text: payload };
    case INCREMENT_RATING_ACTION:
      return {
        ...state,
        rating: Math.min(state.rating + 1, DEFAULT_REVIEW_STATE.rating),
      };
    case DECREMENT_RATING_ACTION:
      return { ...state, rating: Math.max(state.rating - 1, 1) };
    case CLEAR_ACTION:
      return { ...DEFAULT_REVIEW_STATE };
  }
};

export const useReview = () => {
  const [state, dispatch] = useReducer(reducer, DEFAULT_REVIEW_STATE);

  const setName = (name) => {
    dispatch({ type: SET_NAME_ACTION, payload: name });
  };

  const setText = (text) => {
    dispatch({ type: SET_TEXT_ACTION, payload: text });
  };

  const incrementRating = () => {
    dispatch({ type: INCREMENT_RATING_ACTION });
  };

  const decrementRating = () => {
    dispatch({ type: DECREMENT_RATING_ACTION });
  };

  const clear = () => {
    dispatch({ type: CLEAR_ACTION });
  };

  return { state, setName, setText, incrementRating, decrementRating, clear };
};
