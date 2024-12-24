import { useReducer } from "react";

const DEFAULT_REVIEW_STATE = {
  text: "",
  rating: 5,
};

const SET_TEXT_ACTION = "SET_TEXT";
const INCREMENT_RATING_ACTION = "INCREMENT_RATING";
const DECREMENT_RATING_ACTION = "DECREMENT_RATING";
const CLEAR_ACTION = "CLEAR";

const reducer = (state, { type, payload }) => {
  switch (type) {
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

export const useReview = (initialReview = null) => {
  const [state, dispatch] = useReducer(
    reducer,
    initialReview || DEFAULT_REVIEW_STATE
  );

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

  return { state, setText, incrementRating, decrementRating, clear };
};
