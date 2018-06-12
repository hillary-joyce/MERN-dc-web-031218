import React from "react";
import TentImg from "../images/tent.png";
import HikeImg from "../images/trekking.png";
import Info from "../images/information.png";

const ParkDetails = props => (
  <div className="park-detail" key={props.key}>
    <h1>{props.name}</h1>
    <p> {props.type} </p>
    <img src={props.imgURL} alt={props.name} className="park-img" />
    <p> {props.description} </p>
    <p> {props.address} </p>
    <div>
      {props.visitor_center ? <img src={Info} className="icon" /> : null}
      {props.hiking ? <img src={HikeImg} className="icon" /> : null}
      {props.camping ? <img src={TentImg} className="icon" /> : null}
    </div>
    <button onClick={props.viewAll}>Back to All</button>
  </div>
);

export default ParkDetails;
