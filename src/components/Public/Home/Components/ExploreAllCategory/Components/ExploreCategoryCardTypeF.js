import React from "react";
import { useAdminContext } from "../../../../../../theme/AdminContext";
import { styles } from "../../../../../../theme/AllStyles";
import styled from "styled-components";

const OverlayContainer = styled.div`
  position: relative;
  width: 100%;
  height: 300px; /* Hauteur ajustable */
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
   @media (max-width: 668px) {
   height: 665px;
   margin-top: 20px;
   
  }
`;

const ImageBackground = styled.img`
  width: 260px;
  height: 420px;
  object-fit: cover;
  filter: brightness(70%); /* Assombrit l'image pour un meilleur contraste avec le texte */
  @media (max-width: 768px) {
    width: 100%;
    height: 420px;
  }
   
`;

const TextOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${(props) => props.theme.colors.overlayText };
  text-align: center;
  padding: 10px 20px;
  background: rgba(0, 0, 0, 0.5); 
  border-radius: 10px;

  @media (max-width: 668px) {
    position: relative; 
    top: auto;
    left: auto;
    transform: none; 
    margin: 15px;
    background: rgba(0, 0, 0, 0.7); 
    z-index: 10; 
  }
`;

const OverlayTitle = styled.h3`
  font-size: 1.8rem;
  margin: 0;
  font-weight: bold;
`;

const OverlayDescription = styled.p`
  font-size: 1rem;
  margin: 10px 0;
  line-height: 1.5;
`;

const OverlayLink = styled.a`
  font-size: 0.9rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.linkText};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: ${(props) => props.theme.colors.linkHoverText };
  }
`;

export default function ExploreCategoryCardTypeF({
  titre,
  image,
  description,
  Liencategory,
}) {
  const { styleChoice } = useAdminContext();
  const selectedStyle = styles[styleChoice];

  return (
    <selectedStyle.StandardCardExploreCard className='mt-2 mt-md-0'>
        <HorizontalContainer>
      <OverlayContainer>
        <ImageBackground src={image} alt={titre} />
        <TextOverlay>
          <OverlayTitle>{titre}</OverlayTitle>
          <OverlayDescription>{description}</OverlayDescription>
          <OverlayLink href={Liencategory}>En savoir plus</OverlayLink>
        </TextOverlay>
      </OverlayContainer>
      </HorizontalContainer>
    </selectedStyle.StandardCardExploreCard>
  );
}

const HorizontalContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px; 
  }
`;