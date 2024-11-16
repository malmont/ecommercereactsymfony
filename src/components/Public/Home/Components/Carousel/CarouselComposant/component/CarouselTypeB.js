import React from 'react';
import RatingStars from './RatingStars';
import { useNavigate } from 'react-router-dom';
import { useAdminContext } from '../../../../../../../theme/AdminContext';
import { styles } from '../../../../../../../theme/All_styles'; 


const BestSellerCard = ({ category }) => {
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
        </selectedStyle.CardBody>
      </selectedStyle.CardProperty>
    </selectedStyle.CardContainer>
  );
};

export default BestSellerCard;
