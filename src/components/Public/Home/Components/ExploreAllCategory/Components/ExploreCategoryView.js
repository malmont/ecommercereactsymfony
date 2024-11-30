
import React from 'react';
import styled from 'styled-components';
import ExploreCategoryData from './ExploreCategoryData';

const ExploreCategoryView = ({exploreCategoryCard: ExploreCategoryCard }) => {
  return (
    <Wrapper>
      <div className="row">
        {ExploreCategoryData.map((value, index) => {
          const isDifferent = index === 1; 
          return (
            <div className="col" key={index}>
              <ExploreCategoryCard
                isDifferent={isDifferent} 
                titre={value.titre}
                image={value.image}
                description={value.description}
                title={value.title}
                Liencategory={value.Liencategory}
              />
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 80%;
  display: block;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 655px) {
   width: 100%;
  }
`;

export default ExploreCategoryView;

