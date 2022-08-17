import React from 'react';
import "./Card.css";

function Card({image, detail, header}) {
  return (
    <div className="card">
      <div>
        <img src={image} alt="" />
      </div>
      <span>{header}</span>
      <span>{detail}</span>
    </div>
  );
}

export default Card
