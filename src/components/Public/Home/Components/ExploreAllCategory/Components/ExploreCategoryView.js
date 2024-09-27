
import React from 'react';
import styled from 'styled-components';
import ExploreCategoryCard from './ExploreCategoryCard';
import ExploreCategoryData from './ExploreCategoryData';

const ExploreCategoryView = () => {
    return (
        <Wrapper>
            <div className="row">
                {ExploreCategoryData.map((value, index) => {
                    return (
                        <div className="col">
                        <ExploreCategoryCard
                            key={index}
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
}
const Wrapper = styled.div`
   width: 80%;
  display: block;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 655px) {
    width: 50%;
  }
  `;


export default ExploreCategoryView;
