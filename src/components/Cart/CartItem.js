
import { incrementQuantity, decrementQuantity, removeItem} from '../../redux/cartSlice'
import { useDispatch } from 'react-redux'
import styled from "styled-components";

export default function CartItem({id, image, title, price, quantity=0}) {
  const dispatch = useDispatch()
  return (
    <Wrapper>
  <div className="cartItem">
      <img className="cartItem__image" src={image} alt='item'/>
      <div className="cartItem__info">
        <p className="cartItem__title">{title}</p>
        <p className="cartItem__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='cartItem__incrDec'>
          <button onClick={() => dispatch(decrementQuantity(id))}>-</button>
          <p>{quantity}</p>
          <button onClick={() => dispatch(incrementQuantity(id))}>+</button>
        </div>
        <button
          className='cartItem__removeButton' 
          onClick={() => dispatch(removeItem(id))}>
            Remove
        </button>
      </div>
    </div>
    </Wrapper>
  )
}
const Wrapper=styled.div `

.cartItem{
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid gainsboro;
  padding-bottom: 20px;
}

.cartItem:last-child{
  border-bottom: none;
}

.cartItem__info{
  padding-left: 20px;
}

.cartItem__info > button{
  border: unset;
  margin-top: 10px;
  border-radius: 5px;
  background-color: transparent;
}

.cartItem__image{
  object-fit: contain;
  width: 180px;
  height: 180px;
}

.cartItem__title{
  font-size: 20px;
  font-weight: 450;
}

.cartItem__price{
  font-size: 20px;
  line-height: 35px;
}

.cartItem__incrDec{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  width: 100px;
}

.cartItem__incrDec button{
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: gainsboro;
  border: none;
  border-radius: 100px;
}

.cartItem__incrDec button:hover{
  box-shadow: 0 2px 2px gray;
}

.cartItem__incrDec button:active{
  box-shadow: unset;
}

.cartItem__removeButton{
  color: rgb(241, 131, 131);
}

.cartItem__removeButton:hover{
  color: rgb(243, 92, 92);
}

.cartItem__removeButton:active{
  color: rgb(241, 131, 131);
}

@media(max-width: 1000px){

  .cartItem__title{
    font-size: 18px;
  }

  .cartItem__price{
    font-size: 18px;
  }
}

@media(max-width:400px){
  .cartItem{
    flex-direction: column;
  }

  .cartItem__title{
    margin-top: 15px;
  }
}

`;


