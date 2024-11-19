import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components"; // Correction ici
import { getHomeSlider } from "../sliders/api";
import { useAdminContext } from "../../../../../theme/AdminContext";
import { styles } from "../../../../../theme/AllStyles";

const SliderTypeD = () => {
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
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [homeSlider]);

  if (loading || loadingSettings) {
    return <p>Loading slider...</p>;
  }

  const currentSlide = homeSlider[currentSlideIndex];

  return (
    <selectedStyle.FeatureWrapper>
      <SliderWrapper>
        <Slide style={{ backgroundImage: `url(${currentSlide.image})` }}>
          <Content>
            <h1 className="title">{currentSlide.title}</h1>
            <p className="description">{currentSlide.description}</p>
            <StyledButton href={currentSlide.buttonUrl}>
              {currentSlide.buttonMessage}
            </StyledButton>
          </Content>
        </Slide>
      </SliderWrapper>
    </selectedStyle.FeatureWrapper>
  );
};

export default SliderTypeD;

// Keyframes for the slide-in effect
const slideIn = keyframes` 
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

// Styled Components
const SliderWrapper = styled.div`
  height: 600px;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Slide = styled.div`
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.5s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3); /* Overlay effect */
    z-index: 1;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
  max-width: 700px;
  padding: 20px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 20px;
  animation: ${slideIn} 1.5s ease-in-out; /* Correction ici */

  .title {
    font-size: 3rem;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 20px;
    color: ${(props) => props.theme.colors.titleText || "#ffcc00"};
  }

  .description {
    font-size: 1.2rem;
    line-height: 1.8;
    margin-bottom: 30px;
    color: ${(props) => props.theme.colors.descriptionText || "#ffffff"};
  }
`;

const StyledButton = styled.a`
  display: inline-block;
  padding: 12px 30px;
  background-color: ${(props) => props.theme.colors.buttonBackground || "#ff6f61"};
  color: ${(props) => props.theme.colors.buttonText || "#ffffff"};
  text-decoration: none;
  font-size: 1.2rem;
  border-radius: 30px;
  font-weight: bold;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.buttonHover || "#ff3b30"};
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  }
`;
