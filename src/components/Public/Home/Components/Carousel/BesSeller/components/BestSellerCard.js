import React from 'react';
import styled from 'styled-components';
import RatingStars from './RatingStars';

const BestSellerCard = ({ category }) => (
  <Card>
    <div className="card cardProperty">
    <img className="card-img-top" src={category.image} alt={category.name} />
      <div className="card-body colorText">
        <h6 className="card-title">{category.name}</h6>
        <RatingStars rating={3} />
        <div className="row">
          <p className="card-text col">Best Sellers.</p>
          <p  className="ard-text  col">
            {(category.price / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
          </p>
        </div>
      </div>
    </div>
  </Card>
);

const Card = styled.div`
  .cardProperty {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    background-color: white;
    height: 570px;
    width: 290px;
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* This ensures that the button at the bottom doesn't stretch */
  }

  .card-img-top {
    width: 100%;
    height: auto; /* Adjust this as necessary */
  }

  .colorText {
    color: black;
  }

  .card-body {
    flex-grow: 1; /* Makes the card body take up all available space */
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* Spaces out the title and the bottom row */
    padding: 20px; /* Adds padding inside the card body for better spacing */
  }
`;

export default BestSellerCard;
