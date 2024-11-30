import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getHomeSlider } from "../sliders/api";
import { useAdminContext } from "../../../../../theme/AdminContext";
import { styles } from "../../../../../theme/AllStyles";

const SliderTypeB = () => {
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
        <div className="sliderOverlay">
          <selectedStyle.CardBody className="sliderText">
            <h4 className="subtitle">{currentSlide.title}</h4>
            <h1 className="title">{currentSlide.description}</h1>
            <p className="message">{currentSlide.buttonMessage}</p>
            <StyledButton href={currentSlide.buttonUrl} data-testid="slider-button">
              {currentSlide.buttonMessage}
            </StyledButton>
          </selectedStyle.CardBody>
        </div>
      </SliderWrapper>
    </selectedStyle.FeatureWrapper>
  );
};

export default SliderTypeB;

// Styled Components
const SliderWrapper = styled.div`
  height: 600px;
  width: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .sliderOverlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5); /* Semi-transparent overlay */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .sliderText {
    text-align: center;
    animation: fade-in 3s ease-in-out;
    color: ${(props) => props.theme.colors.colorText};

    .subtitle {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
      color: ${(props) => props.theme.colors.subtitleText };
    }

    .title {
      font-size: 3rem;
      margin-bottom: 1rem;
      color: ${(props) => props.theme.colors.titleText };
    }

    .message {
      font-size: 1rem;
      margin-bottom: 1.5rem;
      color: ${(props) => props.theme.colors.messageText};
    }

    .btn {
      padding: 10px 20px;
      border-radius: 50px;
      background: ${(props) => props.theme.colors.buttonBackground };
      color: ${(props) => props.theme.colors.buttonText };
      text-decoration: none;
      font-size: 1rem;
      font-weight: bold;
      transition: all 0.3s ease-in-out;

      &:hover {
        background: ${(props) => props.theme.colors.buttonHover };
        transform: scale(1.05);
      }
    }
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
const StyledButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  border-radius: 50px;
  background: ${(props) => props.theme.colors.buttonBackground };
  color: ${(props) => props.theme.colors.buttonText };
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
  max-width: 200px; /* Limite la largeur maximale */
  text-align: center; /* Centre le texte à l'intérieur */
  overflow: hidden; /* Évite que le texte dépasse */

  &:hover {
    background: ${(props) => props.theme.colors.buttonHover };
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    font-size: 0.9rem; /* Réduit légèrement la taille sur les petits écrans */
    padding: 8px 16px; /* Ajuste le padding */
  }
`;
