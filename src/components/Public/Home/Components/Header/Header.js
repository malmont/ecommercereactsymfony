import styled from "styled-components";
import ContainerSection1 from "../../../../../theme/ThemeContainer/ContainerSection1";
import ContainerSection2 from "../../../../../theme/ThemeContainer/ContainerSection2";
import ContainerSection3 from "../../../../../theme/ThemeContainer/ContainerSection3";
import ContainerSection4 from "../../../../../theme/ThemeContainer/ContainerSection4";
import ContainerSection5 from "../../../../../theme/ThemeContainer/ContainerSection5";
import ContainerSection6 from "../../../../../theme/ThemeContainer/ContainerSection6";

import EmailCard from "../EmailCard/EmailCard";

const Header = () => {
  return (
    <Wrapper>
      <div className = "mb-5"> 
      <ContainerSection1 />
      </div>
      <ContainerSection2 />
      <h1 className="m-4 p-4 text-center">Flash Sales</h1>
      <div className="featureCenter">
        <ContainerSection3 />
      </div>
      <h1 className="m-4 p-4 text-center">New arrival</h1>
      <div className="featureCenter">
        <ContainerSection4 />
      </div>
      <h1 className="m-4 p-4 text-center">Best Sellers</h1>
      <div className="featureCenter">
        <ContainerSection5 />
      </div>
      
      <div className="featureCenter mt-5">
        <ContainerSection6 />
      </div>
      <div className="featureCenter m-4">
        <EmailCard />
      </div>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  .div_principal {
    height: 540px;
    background-size: cover;
    background-position: center;
  }
  .textHeader {
    width: 30%;
    position: absolute;
    top: 300px;
    left: 300px;
    animation: fly-ball 4s infinite;
    color: white;
  }
  .divHeader {
    position: relative;
  }
  .priceHeader {
    position: absolute;
    top: 300px;
    right: 450px;
    background-color: black;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: rotateDiv 4s infinite;
  }
  .priceDiv {
    text-align: center;
  }
    @media(max-width: 1343px){
  .textHeader {
    top: 350px;
   
  }
  .priceHeader {
    top: 40px;
  }
}
@media(max-width: 1088px){
  .textHeader {
    width: 40%;
    right: 50%;
    left: 50%;
  }
  .priceHeader {

    right: 50%;
    left: 50%;
  }

}

@media(max-width: 768px){
  

  .home__row > div:nth-child(3) {
    grid-column: 1 / span 3;
  }
  
  .home__row > div:nth-child(4) {
    grid-column: span 3;
  }

  .home__row > div:nth-child(5) {
    grid-column: 1 / span 3;
  }

  .home__row > div:nth-child(6) {
    grid-column: span 3;
  }

}

@media(max-width: 600px){
  .home__row{
    display: unset;
  }

  .textHeader {
    width: 50%;
    font-size: 10px;
    left:30%;
  }
  .priceHeader {
    left:30%;
}
}


  @keyframes fly-ball {
    100% {
      transform: translateY(-100px);
    }
  }

  @keyframes rotateDiv {
    100% {
      transform: rotate(-360deg);
    }
  }
`;