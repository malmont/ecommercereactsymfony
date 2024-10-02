import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const NewArrivalCard = ({ category }) =>  {
  const navigate = useNavigate(); 
  return (
  <Card>
    <div className="card cardProperty">
      <img className="card-img-top"
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
        <div className="row">
          <p className="card-text col">New Arrival.</p>
          <button type="button" className="btn btn-dark col">
            {(category.price / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
          </button>
        </div>
      </div>
    </div>
  </Card>
  );
};

const Card = styled.div`
  .cardProperty {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    background-color: black;
    height: 650px;
    width: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* This ensures that the button at the bottom doesn't stretch */
  }

  .card-img-top {
    width: 100%;
    height: auto; /* Adjust this as necessary */
  }

  .colorText {
    color: white;
  }

  .card-body {
    flex-grow: 1; /* Makes the card body take up all available space */
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* Spaces out the title and the bottom row */
    padding: 20px; /* Adds padding inside the card body for better spacing */
  }
`;

export default NewArrivalCard;
