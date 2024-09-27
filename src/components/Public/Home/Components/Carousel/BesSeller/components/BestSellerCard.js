import React from 'react';
import styled from 'styled-components';
import RatingStars from './RatingStars';
import { useNavigate } from 'react-router-dom';

const BestSellerCard = ({ category }) => {
  const navigate = useNavigate(); 

  return (
    <Card>
      <div className="card cardProperty">
        <img 
          src={category.image}
          alt={category.name}
          onClick={() =>
            navigate('/DetailsProducts', {
              state: { category },
            })
          }
        />
        <div className="card-body colorText">
          <h6 className="card-title">{category.name}</h6>
          <RatingStars rating={3} />
          <div className="row">
            <p className="card-text col">Best Sellers.</p>
            <p className="card-text col">
              {(category.price / 100).toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              })}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

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

  img {
    width: 100%;
    height: 400px; 
  }


  .colorText {
    color: black;
  }

  .card-body {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: 
    padding: 20px; 
  }
`;

export default BestSellerCard;
