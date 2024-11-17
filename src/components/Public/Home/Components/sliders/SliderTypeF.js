import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { getHomeSlider } from "../Header/api";
import { useAdminContext } from "../../../../../theme/AdminContext";
import { styles } from "../../../../../theme/All_styles";

const SliderTypeF = () => {
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
        {homeSlider.map((slide, index) => (
          <Slide
            key={index}
            style={{ backgroundImage: `url(${slide.image})` }}
            isActive={index === currentSlideIndex}
          >
            <Overlay />
            <Content>
              <h2 className="title">{slide.title}</h2>
              <p className="description">{slide.description}</p>
              <StyledButton href={slide.buttonUrl}>
                {slide.buttonMessage}
              </StyledButton>
            </Content>
          </Slide>
        ))}
      </SliderWrapper>
    </selectedStyle.FeatureWrapper>
  );
};

export default SliderTypeF;

// Keyframes pour les transitions
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

// Styled Components
const SliderWrapper = styled.div`
  height: 600px;
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Slide = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: flex-end; /* Aligner le contenu en bas */
  position: relative;
  overflow: hidden;
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  transition: opacity 1s ease-in-out, transform 1s ease-in-out;
  padding-bottom: 50px; /* Descendre davantage le contenu */

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

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
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
  animation: ${fadeIn} 1.5s ease;

  .title {
    font-size: 2.5rem;
    margin-bottom: 15px;
    font-weight: bold;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.titleText || "#FFD700"};
  }

  .description {
    font-size: 1.2rem;
    margin-bottom: 20px;
    color: ${(props) => props.theme.colors.descriptionText || "#FFFFFF"};
  }
`;

const StyledButton = styled.a`
  display: inline-block;
  padding: 12px 30px;
  background-color: ${(props) => props.theme.colors.buttonBackground || "#007bff"};
  color: ${(props) => props.theme.colors.buttonText || "#ffffff"};
  text-decoration: none;
  font-size: 1rem;
  border-radius: 30px;
  font-weight: bold;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.colors.buttonHover || "#0056b3"};
    transform: translateY(-3px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  }
`;
