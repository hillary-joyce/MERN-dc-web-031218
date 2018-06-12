import React from "react";

const Comment = props => (
  <div>
    <span>
      <b>Name:</b> {props.name}{" "}
    </span>
    <span>
      <b>Rating:</b> {props.rating}
    </span>
    <br />
    <span>
      <b>Comment:</b> {props.comment}
    </span>
    <br />
    <button
      value={props.id}
      park_value={props.parkValue}
      onClick={props.deleteComment}
    >
      Remove Comment
    </button>
  </div>
);

export default Comment;
