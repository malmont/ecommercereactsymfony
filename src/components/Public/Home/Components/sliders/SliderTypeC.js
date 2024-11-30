import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { getHomeSlider } from "../sliders/api";
import { useAdminContext } from "../../../../../theme/AdminContext";
import { styles } from "../../../../../theme/AllStyles";

const SliderTypeC = () => {
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
            <h2 className="title">{currentSlide.title}</h2>
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

export default SliderTypeC;

// Keyframes for the fade-in animation
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Styled Components
const SliderWrapper = styled.div`
  height: 600px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Slide = styled.div`
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 20px;
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
    background: rgba(0, 0, 0, 0.4); /* Overlay effect */
    z-index: 1;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  color: #fff;
  padding: 20px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  max-width: 500px;
  animation: ${fadeIn} 1.5s ease-in-out;

  .title {
    font-size: 2.5rem;
    margin-bottom: 15px;
    font-weight: bold;
    text-transform: uppercase;
  }

  .description {
    font-size: 1rem;
    margin-bottom: 20px;
    line-height: 1.5;
  }
`;

const StyledButton = styled.a`
  display: inline-block;
  padding: 10px 25px;
  background-color: ${(props) => props.theme.colors.buttonBackground};
  color: ${(props) => props.theme.colors.buttonText };
  text-decoration: none;
  font-size: 1rem;
  border-radius: 50px;
  font-weight: bold;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.buttonHover };
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  }
`;
