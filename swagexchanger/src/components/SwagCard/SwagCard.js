import React from "react";
import "./SwagCard.css";

export const SwagCard = ({ details, image, name, owner, category, status }) => {
  return (
    <div className="swag-card">
      <div className="badge">{status}</div>
      <div className="swag-tumb">
        <img src={image} alt={name} />
      </div>
      <div className="swag-details">
        <span className="swag-catagory">{category}</span>
        <h4>{name}</h4>
        <p>{details}</p>
        <div>
          <span className="swag-txt">SIZE: </span>
          <span className="swag-txt">QUANTITY: </span>
        </div>
        <span className="swag-category">OWNER:</span>
        <span className="swag-txt">{owner}</span>
      </div>
    </div>
  );
};
