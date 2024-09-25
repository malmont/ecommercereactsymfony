
import React from 'react';
import styled from 'styled-components';
import ExploreCategoryCard from '../Components/ExploreCategoryCard';

const ExploreCategoryView = () => {
    return (
        <Wrapper>
             <div className="row ">
             <div className="col">
            <ExploreCategoryCard/>
            </div>
            <div className="col">
            <ExploreCategoryCard/>
            </div>
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
