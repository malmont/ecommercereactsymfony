import React from "react";
import { useAdminContext } from "../../../../../../theme/AdminContext";
import { styles } from "../../../../../../theme/AllStyles";
import styled from "styled-components";

const HorizontalContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 20px;
   @media (max-width: 768px) {
    flex-direction: column; 
    align-items: flex-start; 
    gap: 10px; 
  }
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1;
`;

const ImageSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function ExploreCategoryCardTypeE({
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
        {/* Texte à gauche */}
        <TextSection>
          <selectedStyle.TitleExplore>{titre}</selectedStyle.TitleExplore>
          <selectedStyle.DescriptionExplore>{description}</selectedStyle.DescriptionExplore>
          <selectedStyle.LinkExplore href={Liencategory}>
            En savoir plus
          </selectedStyle.LinkExplore>
        </TextSection>

        {/* Image à droite */}
        <ImageSection>
          <selectedStyle.ImageWrapperExploreStandart>
            <selectedStyle.CardImageExploreStandart src={image} alt={titre} />
          </selectedStyle.ImageWrapperExploreStandart>
        </ImageSection>
      </HorizontalContainer>
    </selectedStyle.StandardCardExploreCard>
  );
}
