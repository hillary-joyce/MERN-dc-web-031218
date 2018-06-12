import React from "react";

const ParkSimple = props => (
  <div
    className="va-park"
    onClick={props.viewOne}
    value={props.id}
    key={props.id}
    style={{
      fontSize: "2.5rem",
      padding: "5% 10%",
      color: "white",
      backgroundImage: `linear-gradient(
     rgba(43, 121, 134, 0.6),
     rgba(43, 121, 134, 0.6)
   ),url(${props.imgURL})`,
      backgroundSize: "cover",
      borderRadius: "5px"
    }}
  >
    <h3 value={props.id}> {props.name} </h3>
    <p value={props.id}> {props.address} </p>
  </div>
);

export default ParkSimple;
