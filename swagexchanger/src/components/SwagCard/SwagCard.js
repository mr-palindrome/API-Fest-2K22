import React from "react";
import './SwagCard.css';

function SwagCard(props) {
  return (
    <div class="swag-card">
      <div class="badge">{props.status}</div>
      <div class="swag-tumb">
        <img src={props.image} alt={props.title} />
      </div>
      <div class="swag-details">
        <span class="swag-catagory">{props.category}</span>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
        <div>
          <span class="swag-txt" >SIZE: {props.size}</span>
          <span class="swag-txt" >QUANTITY: {props.quantity}</span>
        </div>
        <span class="swag-category" >OWNER:</span>
        <span class="swag-txt">{props.ownerName}</span>
      </div>
    </div>
  )
}

export default SwagCard;