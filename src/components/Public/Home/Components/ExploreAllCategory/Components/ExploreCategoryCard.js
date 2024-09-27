import React from 'react';
import styled from 'styled-components';

export default function ExploreCategoryCard(props) {
 return(   <Card>
  <div className="card mb-4 mt-4">
  <div className="row g-4 bg-dark m-4">
    <div className="col">
    <img className="card-img-top sizeImage" src={props.image} alt='' />
    </div>
    <div className="col text-white container">
      <div className="card-body ">
        <h3 className="card-title">{props.titre}</h3>
        <p className="card-text">{props.description}</p>
        <p className="card-text"><small className="text-muted">{props.Liencategory}</small></p>
      </div>
    </div>
  </div>
</div>

    </Card>
)}

const Card = styled.div`  

max-width: 100%;
padding: 10px 10px;

.container {
    display: flex;
    justify-content: center;
    align-items: center;
}

`;
