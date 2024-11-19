import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdminContext } from '../../../../../../../theme/AdminContext';
import { styles } from '../../../../../../../theme/AllStyles'; 

const CarouselTypeC = ({ category }) => {
  const navigate = useNavigate();
  const {  styleChoice } = useAdminContext();
  const selectedStyle = styles[styleChoice];
  return (
    <selectedStyle.CardContainer>
      <selectedStyle.CardProperty>
        <selectedStyle.CardImage
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
          <div className="row">
            <selectedStyle.ColorText>New Arrival.</selectedStyle.ColorText>
            <selectedStyle.NavButton>
              {(category.price / 100).toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              })}
            </selectedStyle.NavButton>
          </div>
        </selectedStyle.CardBody>
      </selectedStyle.CardProperty>
    </selectedStyle.CardContainer>
  );
};

export default CarouselTypeC;
