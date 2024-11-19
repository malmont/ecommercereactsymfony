import React from 'react';
import { useNavigate } from 'react-router-dom';
import Countdown from 'react-countdown';
import { useAdminContext } from '../../../../../../../theme/AdminContext';
import { styles } from '../../../../../../../theme/AllStyles';
import styled from 'styled-components'

const CarouselTypeA = ({ category }) => {
  const navigate = useNavigate();
  const { styleChoice } = useAdminContext();
  const selectedStyle = styles[styleChoice] ; 
  return (

    <CardContainer>
      <selectedStyle.CardProperty>
        <Countdown date={Date.now() + 100000} renderer={(props) => renderer(props, selectedStyle)} />
        <CardImage
          src={category.image}
          alt={category.name}
          onClick={() =>
            navigate('/DetailsProducts', {
              state: { category },
            })
          }
        />
        <selectedStyle.CardBody>
        <h6 className="card-title">
            {category.name.length > 10 ? `${category.name.slice(0, 10)}...` : category.name}
          </h6>
       
          <p className="card-text">
            {(category.price / 100).toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
            <selectedStyle.DiscountBadge>-40%</selectedStyle.DiscountBadge>
          </p>
        </selectedStyle.CardBody>
      </selectedStyle.CardProperty>
    </CardContainer>

  );
};

const renderer = ({ hours, minutes, seconds }, selectedStyle) => {
  return (
    <selectedStyle.Countdown>
      Deal of the Day
      <selectedStyle.Time>
        {hours}:{minutes}:{seconds}
      </selectedStyle.Time>
    </selectedStyle.Countdown>
  );
};

const CardImage= styled.img`
  height: 220px;
  width: 210px;
  cursor: pointer;
  padding-top: 10px;
  border-radius: 30%;
`;
const CardContainer= styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
background-color: ${(props) => props.theme.colors.cardBackground};
box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
height: 440px;
width: 250px;
padding-bottom: 10px;
`;


export default CarouselTypeA;
