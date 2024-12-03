import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdminContext } from '../../../../../../../theme/AdminContext';
import { styles } from '../../../../../../../theme/AllStyles';

const CarouselTypeE = ({ category }) => {
  const navigate = useNavigate();
  const { styleChoice } = useAdminContext();
  const selectedStyle = styles[styleChoice];

  return (
    <selectedStyle.CardContainer>
      {/* Prix en haut */}
      <selectedStyle.CardBody>
        {/* <selectedStyle.NavButton>
          {(category.price / 100).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          })}
        </selectedStyle.NavButton> */}
      </selectedStyle.CardBody>
      <div className="row d-flex align-items-center justify-content-start">
        {/* Image */}
        <div className="col-12 col-md-8 m-2 text-center mb-3 mb-md-0">
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
        <div className="col-12 col-md text-center">
          <selectedStyle.NavButton>
            {(category.price / 100).toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
          </selectedStyle.NavButton>
        </div>
      </div>

      {/* Nom et description en bas */}
      <selectedStyle.CardBody>
        <h6 className="card-title">
          {category.name.length > 10 ? `${category.name.slice(0, 17)}...` : category.name}
        </h6>
        <selectedStyle.ColorText>New Arrival.</selectedStyle.ColorText>
      </selectedStyle.CardBody>
    </selectedStyle.CardContainer>
  );
};


export default CarouselTypeE;
