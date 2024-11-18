import React from "react";
import { useAdminContext } from "../../../../../../theme/AdminContext";
import { styles } from "../../../../../../theme/All_styles";

export default function ExploreCategoryCardTypeA({
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
        <selectedStyle.ContentExplore>
          <selectedStyle.ImageWrapperExplore>
            <selectedStyle.CardImageExplore src={image} alt="" />
          </selectedStyle.ImageWrapperExplore>
          <selectedStyle.DetailsExplore>
            <selectedStyle.TitleExplore>{titre}</selectedStyle.TitleExplore>
            <selectedStyle.DescriptionExplore>{description}</selectedStyle.DescriptionExplore>
            <selectedStyle.LinkExplore href={Liencategory}>
              En savoir plus
            </selectedStyle.LinkExplore>
          </selectedStyle.DetailsExplore>
        </selectedStyle.ContentExplore>
      </selectedStyle.DifferentCardExploreCard>
    );
    
  }

  return (
    <selectedStyle.StandardCardExploreCard>
      <selectedStyle.CardExplore>
        <selectedStyle.RowExplore>
          <selectedStyle.ColumnExplore>
            <selectedStyle.ImageWrapperExplore>
              <selectedStyle.CardImageExplore src={image} alt="" />
            </selectedStyle.ImageWrapperExplore>
          </selectedStyle.ColumnExplore>
          <selectedStyle.ColumnExplore>
            <selectedStyle.CardBodyExplore>
              <selectedStyle.TitleExplore>{titre}</selectedStyle.TitleExplore>
              <selectedStyle.DescriptionExplore>{description}</selectedStyle.DescriptionExplore>
              <selectedStyle.LinkExplore href={Liencategory}>
                {Liencategory}
              </selectedStyle.LinkExplore>
            </selectedStyle.CardBodyExplore>
          </selectedStyle.ColumnExplore>
        </selectedStyle.RowExplore>
      </selectedStyle.CardExplore>
    </selectedStyle.StandardCardExploreCard>
  );
  
}
