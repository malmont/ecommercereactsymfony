import React from 'react';
import styled from "styled-components";
import { observer } from "mobx-react-lite";
import { useDependencies } from '../../../../DependencyContext';

const TotalView = observer(({ handleCheckout, buttonLabel = 'Proceed to Checkout' }) => {
  const { cartViewModel } = useDependencies();

  return (
    <Wrapper>
      <div className="total">
        <h4>Orders Summary</h4>
        <div className="trait"></div>
        <div className="height"></div>
        <div className="row">
          <div className="col">
            <p className="total__p">
              Cart Subtotal HT ({cartViewModel.totalQuantity} items)
            </p>
          </div>
          <div className="col-6 col-sm-4">
            <p className="total__p">
              <strong>{((cartViewModel.totalPrice) / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</strong>
            </p>
          </div>
        </div>

        <div className="trait"></div>
        <div className="row">
          <div className="col">
            <p className="total__p">Taxe (20%)</p>
          </div>
          <div className="col-6 col-sm-4">
            <p className="total__p">
              <strong>{((cartViewModel.totalPrice * 0.2) / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</strong>
            </p>
          </div>
        </div>

        <div className="trait"></div>

        <div className="row">
          <div className="col">
            <p className="total__p">Shipping</p>
          </div>
          <div className="col-6 col-sm-4">
            <p className="total__p">
              <strong>free shipping</strong>
            </p>
          </div>
        </div>

        <div className="trait"></div>

        <div className="row">
          <div className="col">
            <p className="total__p">Total TTC</p>
          </div>
          <div className="col-6 col-sm-4">
            <p className="total__p">
              <strong>{((cartViewModel.totalPriceWithTax) / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</strong>
            </p>
          </div>
        </div>

        <button type="button" className="btn btn-success" onClick={handleCheckout}>
          {buttonLabel}
        </button>
      </div>
      <div className="height"></div>
    </Wrapper>
  );
});

const Wrapper = styled.div`
.total{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 1px solid #000;
  margin-bottom:10px;
  padding: 20px;
  background: white;
  border-radius: 3px;
  min-width: 350px;
}

.total > h2{
  font-weight: 400;
}
.height{
  height:10px;
}
.total__p{
  font-size: 20px;
  font-weight: 450;
  color: rgb(72, 77, 77);
}
.trait{
  border-top: 1px solid #000;
}
.total > button:active{
  background-color: unset;
  border: 1px solid #FFD814;
}

@media(max-width:800px){
  .total{
    width: unset;
    text-align: center;
  }
}

@media(max-width:900px){
  .total{
    min-width: unset;
  }
}
`;

export default TotalView;
