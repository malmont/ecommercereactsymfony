import styled from "styled-components";
import React, { useState, useEffect } from "react";
import CarouselView from "../Carousel/CarouselComp/CarouselView";
import Feature from "./Feature";
import NewArrivalCard from "../Carousel/NewArrival/CarouselNewArrivalView";
import CarousselBestSellerView from "../Carousel/BesSeller/CarousselBestSellerView";
import { observer } from "mobx-react-lite";
import { useDependencies } from '../../../../../../src/DependencyContext';
import ExploreCategoryView from "../ExploreAllCategory/Components/ExploreCategoryView";
import EmailCard from "../EmailCard/EmailCard";

const Header = observer(() => {
  const { headerViewModel } = useDependencies();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
 
    headerViewModel.loadHomeSlider();
  }, [headerViewModel]);

  useEffect(() => {
    if (headerViewModel.homeSlider.length > 0) {

      const interval = setInterval(() => {
        setCurrentSlideIndex((prevIndex) => 
          (prevIndex + 1) % headerViewModel.homeSlider.length
        );
      }, 4000);

      return () => clearInterval(interval); 
    }
  }, [headerViewModel.homeSlider]);

  if (headerViewModel.loading) {
    return <p>Loading...</p>;
  }

  const currentSlide = headerViewModel.homeSlider[currentSlideIndex];

  return (
    <Wrapper>
      <div
        className="div_principal"
        style={{ backgroundImage: `url(${currentSlide.image})` }}
      >
        <div className="text-light divHeader">
          <div className="textHeader">
            <h4>{currentSlide.title}</h4>
            <h1>{currentSlide.description}</h1>
            <p>{currentSlide.buttonMessage}</p>
            <a href={currentSlide.buttonUrl} className="btn btn-info m-3">
              {currentSlide.buttonMessage}
            </a>
          </div>
          <div className="priceHeader">
            <div className="priceDiv">
              From
              <h1>$30</h1>
              Shop
            </div>
          </div>
        </div>
      </div>

      <Feature />

      <h1 className="m-4 p-4 text-center">Flash Sales</h1>
      <div className="featureCenter">
        <CarouselView />
      </div>
      <h1 className="m-4 p-4 text-center">New arrival</h1>
      <div className="featureCenter">
        <NewArrivalCard />
      </div>
      <h1 className="m-4 p-4 text-center">Best Sellers</h1>
      <div className="featureCenter">
        <CarousselBestSellerView />
      </div>

      <div className="featureCenter">
        <ExploreCategoryView />
      </div>

      <div className="featureCenter m-4">
        <EmailCard />
      </div>


    </Wrapper>
  );
});

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