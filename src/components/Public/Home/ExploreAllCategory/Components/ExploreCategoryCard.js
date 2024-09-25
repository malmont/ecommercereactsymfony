import React from 'react';
import styled from 'styled-components';

const ExploreCategoryCard = () => ( 
    <Card>
  <div className="card mb-4 mt-4">
  <div className="row g-4 bg-dark m-4">
    <div className="col">
    <img className="card-img-top sizeImage" src='https://backend-strapi.online/jeesign/assets/uploads/products/8f2385b36bfbb9f1104f47061b7f0c9c1d70cf7e.png' alt='' />
    </div>
    <div className="col text-white">
      <div className="card-body ">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>

    </Card>
);

const Card = styled.div`  

max-width: 100%;
padding: 10px 10px;

`;
export default ExploreCategoryCard;