import React from 'react';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

export default function Card({ id, name, description, price, image, style, variants }) {

  const navigate = useNavigate();
  return (
    <Wrapper>
      <div className="card positionrelative">
        <img src={image} alt={name} onClick={() => navigate('/DetailsProducts', {
          state: { id, name, description, price, image, style, variants }
        })} />
        <div className="card-body">
          <div className="row">
            <div className="col">
              <div className="titleVignette">
                {name}
              </div>
              <div>{description}</div>
            </div>
            <div className="col col-lg-3">
              ${price}
            </div>
          </div>
        </div>
 
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .positionrelative {
    position: relative;
    width: 25rem;  // Cette propriété était hors du bloc .positionrelative
  }
  .activeButton {
    display: none;
  }
  img {
    width: 100%;
    height: 15rem;
    object-fit: cover;
  }
  .titleVignette { 
    padding: 5px 10px;
    border: 2px solid red;
    display: inline-block;
    border-radius: 5px;
    color: blue;
  }
  .card:hover .activeButton {
    display: block;
    position: absolute;
    transform: rotate(360deg);
    animation-name: in;
    animation-duration: 2s;
    animation-iteration-count: 1;
  }
  @keyframes in {
    100% {
      transform: rotate(0deg);
    }
  }
`;
