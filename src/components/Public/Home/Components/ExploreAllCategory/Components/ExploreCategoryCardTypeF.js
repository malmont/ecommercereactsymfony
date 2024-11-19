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
`;

const ImageBackground = styled.img`
  width: 260px;
  height: 400px;
  object-fit: cover;
  filter: brightness(70%); /* Assombrit l'image pour un meilleur contraste avec le texte */
`;

const TextOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${(props) => props.theme.colors.overlayText || "#ffffff"};
  text-align: center;
  padding: 10px 20px;
  background: rgba(0, 0, 0, 0.5); /* Superposition semi-transparente */
  border-radius: 10px;
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
  color: ${(props) => props.theme.colors.overlayLink || "#f1c40f"};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: ${(props) => props.theme.colors.overlayLinkHover || "#e67e22"};
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
    <selectedStyle.StandardCardExploreCard>
      <OverlayContainer>
        {/* Image en arrière-plan */}
        <ImageBackground src={image} alt={titre} />

        {/* Texte centré sur l'image */}
        <TextOverlay>
          <OverlayTitle>{titre}</OverlayTitle>
          <OverlayDescription>{description}</OverlayDescription>
          <OverlayLink href={Liencategory}>En savoir plus</OverlayLink>
        </TextOverlay>
      </OverlayContainer>
    </selectedStyle.StandardCardExploreCard>
  );
}
