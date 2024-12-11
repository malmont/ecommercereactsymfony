import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdminContext } from '../../../../../../../theme/AdminContext';
import { styles } from '../../../../../../../theme/AllStyles';
import styled from 'styled-components';

const CarouselTypeE = ({ category }) => {
  const navigate = useNavigate();
  const { styleChoice } = useAdminContext();
  const selectedStyle = styles[styleChoice];

  return (
    <CardContainer>
      {/* Prix en haut */}

      <div className="row d-flex align-items-center justify-content-start">
        {/* Image */}
        <div className="col-12 col-md-8 m-2 text-center mb-3 mb-md-2">
          <selectedStyle.CardImage
            src={category.image}
            alt={category.name}
            onClick={() =>
              navigate('/DetailsProducts', {
                state: { category },
              })
            }
          />
        </div>

        {/* Bouton */}
        <div className="col-3 col-md text-center">
          <selectedStyle.NavButton>
            {(category.price / 100).toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
          </selectedStyle.NavButton>
   
      </div>

      {/* Nom et description en bas */}
      <selectedStyle.CardBody>
        <h6 className="card-title">
          {category.name.length > 10 ? `${category.name.slice(0, 17)}...` : category.name}
        </h6>
        <selectedStyle.ColorText>New Arrival.</selectedStyle.ColorText>
      </selectedStyle.CardBody>
      </div>

    </CardContainer>
  );
};


export default CarouselTypeE;
const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 12px;
  width: 90%;  
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  margin: 10px;
  @media (max-width: 768px) {

    width: 95%;
  }
`;