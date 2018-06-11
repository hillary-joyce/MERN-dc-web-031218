import React from "react";

const ParkDetails = props => (
  <div key={props.key}>
    <h1>{props.name}</h1>
    <img src={props.imgURL} alt={props.name} />
    <p> {props.type} </p>
    <p> {props.description} </p>
    <p> {props.address} </p>
    <p> {props.visitor_center} </p>
    <p> {props.entrance_fee} </p>
    <p> {props.hiking} </p>
    <p> {props.camping} </p>
    <button onClick={props.viewAll}>Back to All</button>
  </div>
);

export default ParkDetails;
