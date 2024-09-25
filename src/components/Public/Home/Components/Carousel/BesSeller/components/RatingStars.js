import React from 'react';
import styled from 'styled-components';

const RatingStars = ({ rating }) => {
  const totalStars = 5;
  return (
    <StarsWrapper>
      {Array.from({ length: totalStars }, (_, index) => {
        return (
          <span key={index} className={index < rating ? 'filled' : ''}>★</span>
        );
      })}
    </StarsWrapper>
  );
};

const StarsWrapper = styled.div`
  font-size: 20px;
  color: #ccc; /* Couleur par défaut des étoiles */

  span.filled {
    color: gold; /* Couleur des étoiles remplies */
  }
`;

export default RatingStars;
