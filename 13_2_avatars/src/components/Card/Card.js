import React from "react";
import "./Card.css";

const Card = ({ imgSrc, title }) => {
  return (
    <div className="card">
      <img className="cardImg" src={imgSrc} alt={title}></img>
      <div className="cardInfo">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default Card;
