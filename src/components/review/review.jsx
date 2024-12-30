"use client";

import { useState } from "react";
import { useAuth } from "../authContext/useAuth";
import { ReviewFormContainer } from "./reviewFormContainer";

export const Review = ({ review, user }) => {
  const { isAuthorized, id: loggedUserId } = useAuth();
  const [isEditing, setIsEditing] = useState(false);

  const toggleEditing = () => setIsEditing((prev) => !prev);

  if (!review || !user) {
    return null;
  }

  const { text, rating } = review;
  const { name: userName, id: userId } = user;

  return (
    <>
      <div>
        <span>
          {userName} <small>rates</small> {rating}: <em>{text}</em>
        </span>
        &nbsp;
        {isAuthorized && loggedUserId === userId && (
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              toggleEditing();
            }}
          >
            {isEditing ? "Cancel" : "Edit"}
          </a>
        )}
      </div>
      {isAuthorized && isEditing && (
        <ReviewFormContainer editedReview={review} />
      )}
    </>
  );
};
