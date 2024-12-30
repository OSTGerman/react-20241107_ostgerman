"use client";

import { useAuth } from "../authContext/useAuth";
import { Counter, VARIANT_THUMB } from "../counter/counter";
import { useReview } from "./useReview";

export const ReviewForm = ({ review, submit }) => {
  const { state, setText, incrementRating, decrementRating, clear } =
    useReview(review);

  const { text, rating } = state;

  const { login, id: userId } = useAuth();

  return (
    <>
      <h4>We are eager to hear you opinion, {login}</h4>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <fieldset>
          <label htmlFor="text">Text</label>
          <textarea
            name="text"
            rows={5}
            value={text}
            onChange={(e) => setText(e.target.value)}
          >
            {text}
          </textarea>
          <label htmlFor="rating">Rate us</label>
          <input type="hidden" name="rating" value={rating} />
          <Counter
            name="rating"
            variant={VARIANT_THUMB}
            value={rating}
            increment={incrementRating}
            decrement={decrementRating}
          />
        </fieldset>
        <input type="button" value="Clear" onClick={clear} />
        <input
          type="button"
          value="Submit"
          onClick={() => {
            submit({ text, rating, userId, id: review?.id });
          }}
        />
      </form>
    </>
  );
};
