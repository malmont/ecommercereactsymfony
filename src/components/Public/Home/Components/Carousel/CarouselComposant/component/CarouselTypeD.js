import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdminContext } from '../../../../../../../theme/AdminContext';
import { styles } from '../../../../../../../theme/AllStyles'; 
import styled from 'styled-components';

const CarouselTypeD = ({ category }) => {
  const navigate = useNavigate();
  const { styleChoice } = useAdminContext();
  const selectedStyle = styles[styleChoice];

  return (
    <selectedStyle.CardContainer>
      <selectedStyle.CardProperty>
        {/* Image du produit */}
        <selectedStyle.CardImage
          src={category.image}
          alt={category.name}
          onClick={() =>
            navigate('/DetailsProducts', {
              state: { category },
            })
          }
        />

        {/* Corps de la carte */}
        <selectedStyle.CardBody>
          <h6 className="card-title">
            {category.name.length > 10 ? `${category.name.slice(0, 10)}...` : category.name}
          </h6>
          <selectedStyle.ColorText>New Arrival.</selectedStyle.ColorText>
        </selectedStyle.CardBody>

        {/* Bouton flottant */}
        <CardFooter>
          <FloatingButton>
            {(category.price / 100).toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
          </FloatingButton>
        </CardFooter>
      </selectedStyle.CardProperty>
    </selectedStyle.CardContainer>
  );
};

export default CarouselTypeD;

const CardFooter = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  padding: 10px;
`;

const FloatingButton = styled.button`
  background-color: ${(props) => props.theme.colors.buttonBackground};
  color: ${(props) => props.theme.colors.buttonText};
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.buttonHover};
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 10px #3498db;
  }
`;
