import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getHomeSlider } from "../sliders/api";
import { useAdminContext } from "../../../../../theme/AdminContext";
import { styles } from "../../../../../theme/AllStyles";

const SliderTypeA = () => {
  const { styleChoice, loadingSettings } = useAdminContext();
  const [homeSlider, setHomeSlider] = useState([]);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const selectedStyle = styles[styleChoice];

  useEffect(() => {
    const fetchSlider = async () => {
      try {
        const homeSliderData = await getHomeSlider();
        setHomeSlider(homeSliderData);
        setLoading(false);
      } catch (error) {
        console.error("Failed to load slider data:", error);
        setLoading(false);
      }
    };

    fetchSlider();
  }, []);

  useEffect(() => {
    if (homeSlider.length > 0) {
      const interval = setInterval(() => {
        setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % homeSlider.length);
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [homeSlider]);

  if (loading || loadingSettings) {
    return <p>Loading slider...</p>;
  }

  const currentSlide = homeSlider[currentSlideIndex];

  return (
    <selectedStyle.FeatureWrapper>
      <SliderWrapper style={{ backgroundImage: `url(${currentSlide.image})` }}>
        <div className="sliderContent">
          <selectedStyle.CardBody className="sliderText">
            <h4>{currentSlide.title}</h4>
            <h1>{currentSlide.description}</h1>
            <p>{currentSlide.buttonMessage}</p>
        
          </selectedStyle.CardBody>
   
        </div>
      </SliderWrapper>
    </selectedStyle.FeatureWrapper>
  );
};

export default SliderTypeA;


// Styled Components
const SliderWrapper = styled.div`
  height: 540px;
  width: 100%;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .sliderContent {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px ;
  }

  .sliderText {
    animation: fly-ball 4s infinite;
    color: ${(props) => props.theme.colors.colorText};
  }

  .priceTag {
    background-color: black;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: rotateDiv 4s infinite;
  }

  @media (max-width: 1343px) {
    .sliderText {
      top: 350px;
    }
    .priceTag {
      top: 40px;
    }
  }

  @media (max-width: 1088px) {
    .sliderText {
      width: 40%;
      margin: 0 auto;
    }
    .priceTag {
      margin: 0 auto;
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