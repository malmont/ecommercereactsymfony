import React from 'react';
import styled from 'styled-components';

const EmailCard = () => (
  <Card>
    <h2 className='title'>Luminae Store</h2>
    <p>Register your email not to miss the last minutes off! Free delivery</p>
    <div className='inputContainer'>
      <input className='Input' type="email" placeholder="Enter your email" />
      <button className='Button'>Submit</button>
    </div>
  </Card>
);

const Card = styled.div`
  background-color: #e0e0e0;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 60%;
  margin: auto;

  .title {
    color: #333;
    font-size: 18px;
    margin-bottom: 10px;
  }

  .inputContainer {
    background: white;
    border: 1px solid #ccc;
    border-radius: 5px;
    overflow: hidden;
    display: flex;
  }

  .Input {
    border: none;
    padding: 10px;
    flex-grow: 1;
    font-size: 16px;
  }

  .Button {
    background-color: #007BFF;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
 
`;

export default EmailCard;
