import React from "react";
import { useAdminContext } from "../../../../../../theme/AdminContext";
import { styles } from "../../../../../../theme/All_styles";
import styled from "styled-components";

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
`;

const CenteredText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-align: center;
`;

export default function ExploreCategoryCardTypeB({
  isDifferent,
  titre,
  image,
  description,
  Liencategory,
}) {
  const { styleChoice } = useAdminContext();
  const selectedStyle = styles[styleChoice];

  if (isDifferent) {
    return (
      <selectedStyle.DifferentCardExploreCard>
        <selectedStyle.RowExplore>
          <selectedStyle.ColumnExplore>
            <TextContainer>
              <selectedStyle.TitleExplore>{titre}</selectedStyle.TitleExplore>
              <selectedStyle.DescriptionExplore>
                {description}
              </selectedStyle.DescriptionExplore>
              <selectedStyle.LinkExplore href={Liencategory}>
                En savoir plus
              </selectedStyle.LinkExplore>
            </TextContainer>
          </selectedStyle.ColumnExplore>
        </selectedStyle.RowExplore>
      </selectedStyle.DifferentCardExploreCard>
    );
  }

  return (
    <selectedStyle.StandardCardExploreCard>
      <selectedStyle.RowExplore>
        <selectedStyle.ColumnExplore>
          <selectedStyle.ImageWrapperExploreStandart>
            <selectedStyle.CardImageExploreStandart src={image} alt={titre} />
          </selectedStyle.ImageWrapperExploreStandart>
        </selectedStyle.ColumnExplore>
        <selectedStyle.ColumnExplore>
          <CenteredText>
            <selectedStyle.TitleExplore>{titre}</selectedStyle.TitleExplore>
            <selectedStyle.DescriptionExplore>
              {description}
            </selectedStyle.DescriptionExplore>
            <selectedStyle.LinkExplore href={Liencategory}>
              {Liencategory}
            </selectedStyle.LinkExplore>
          </CenteredText>
        </selectedStyle.ColumnExplore>
      </selectedStyle.RowExplore>
    </selectedStyle.StandardCardExploreCard>
  );
}
