import React from "react";

const ParkSimple = props => (
  <div key={props.id}>
    <img url={props.imgURL} alt={props.name} />
    <p> {props.description} </p>
    <button onClick={props.viewOne} value={props.value}>
      Details
    </button>
  </div>
);

export default ParkSimple;
