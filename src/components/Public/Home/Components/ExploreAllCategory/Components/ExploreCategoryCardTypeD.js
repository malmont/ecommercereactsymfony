import React from "react";
import { useAdminContext } from "../../../../../../theme/AdminContext";
import { styles } from "../../../../../../theme/AllStyles";
import styled from "styled-components";

const TextCenteredContainer = styled.div`
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
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
      {/* Image Full-Width */}
      <selectedStyle.ImageWrapperExploreStandart className='mt-2 mt-md-0'>
        <selectedStyle.CardImageExploreStandart src={image} alt={titre} />
      </selectedStyle.ImageWrapperExploreStandart>

      {/* Centered Text Section */}
      <TextCenteredContainer>
        <selectedStyle.TitleExplore>{titre}</selectedStyle.TitleExplore>
        <selectedStyle.DescriptionExplore>{description}</selectedStyle.DescriptionExplore>
        <selectedStyle.LinkExplore href={Liencategory}>
          En savoir plus
        </selectedStyle.LinkExplore>
      </TextCenteredContainer>
    </selectedStyle.StandardCardExploreCard>
  );
}
