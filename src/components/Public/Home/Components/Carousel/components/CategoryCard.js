// src/components/Carousel/views/components/CategoryCard.js

import React from 'react';
import styled from 'styled-components';
import Countdown from 'react-countdown';

const CategoryCard = ({ category }) => (
  <Card>
     
    <div class="card cardPorperty">
    <Countdown date={Date.now() + 100000} renderer={renderer} />
      <img class="card-img-top" src={category.image} alt={category.type_epreuve_sportive} />
      <div class="card-body">
        <h6 class="card-title">
          {category.name}
        </h6>
        <p class="card-text">Some quick example .</p>
        <p class="card-text">
          {(category.price/100).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
          <span class="discount-badge">-40%</span>
        </p>
      </div>
    </div>

  </Card>
);
const renderer = ({ hours, minutes, seconds }) => {
  return (
    <div className="countdown">
      Deal of the Day
      <div className="time">{hours}:{minutes}:{seconds}</div>
    </div>
  );
};

const Card = styled.div`
  .cardPorperty {
  box-shadow: 0 1px 2px rgba(0,0,0,0.2);
  display: flex;
  justify-content: center;  /* Centre horizontalement le contenu */
  align-items: center;      /* Centre verticalement le contenu */
  height: 370px;
  width: 250px;
}

  .card-img-top {
    height: 160px;
    width: 150px;
  }
    .discount-badge {
  background-color: red;
  color: white;
  border-radius: 10%;
  padding: 5px 10px;
  font-size: 12px;
  margin-left: 10px;
  display: inline-block;
}
   .countdown {
    width: 100%;
    background: rgba(255, 255, 255, 0.8);
    color: #555;
    text-align: center;
    padding: 5px 0;
    font-size: 14px;
  }

  .time {
    font-weight: bold;
    font-size: 16px;
  }
`;



export default CategoryCard;
