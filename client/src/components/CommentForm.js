import React from "react";

const CommentForm = props => (
  <form>
    <label>Name: </label>
    <input
      type="text"
      value={props.commmentName}
      name="commentName"
      onChange={props.handleInputChange}
    />
    <label>Rating: </label>
    <input
      type="text"
      value={props.commmentRating}
      name="commentRating"
      onChange={props.handleInputChange}
    />
    <label>Comment: </label>
    <input
      type="text"
      value={props.commmentComment}
      name="commentComment"
      onChange={props.handleInputChange}
    />
  </form>
);

export default CommentForm;
