import React from "react";

const CommentForm = props => (
  <form>
    <div className="row">
      <div className="eight columns">
        <label>Name: </label>
        <input
          className="u-full-width"
          type="text"
          value={props.commmentName}
          name="commentName"
          onChange={props.handleInputChange}
        />
      </div>
      <div className="four columns">
        <label>Rating: </label>
        <input
          type="text"
          className="u-full-width"
          value={props.commmentRating}
          name="commentRating"
          onChange={props.handleInputChange}
        />
      </div>
    </div>
    <div className="row">
      <label>Comment: </label>
      <input
        type="text"
        className="u-full-width"
        value={props.commmentComment}
        name="commentComment"
        onChange={props.handleInputChange}
      />
    </div>
    <div className="row">
      <button
        className="add-comment u-full-width"
        onClick={props.addComment}
        value={props.id}
      >
        Add Comment
      </button>
    </div>
  </form>
);

export default CommentForm;
