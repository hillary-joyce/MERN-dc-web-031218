import React from "react";

const Comment = props => (
  <div>
    <p>{props.name}</p>
    <p>{props.rating}</p>
    <p>{props.comment}</p>
  </div>
);

export default Comment;
