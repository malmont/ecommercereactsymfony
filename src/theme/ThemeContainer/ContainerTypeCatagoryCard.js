
import { ThemeProvider } from 'styled-components';
import { useAdminContext } from '../AdminContext';
import CarouselTypeA from "../../components/Public/Home/Components/Carousel/CarouselComposant/component/CarouselTypeA";
import CarouselTypeB from "../../components/Public/Home/Components/Carousel/CarouselComposant/component/CarouselTypeB";
import CarouselTypeD from "../../components/Public/Home/Components/Carousel/CarouselComposant/component/CarouselTypeD";
import CarouselTypeC from "../../components/Public/Home/Components/Carousel/CarouselComposant/component/CarouselTypeC";
import CarouselTypeE from "../../components/Public/Home/Components/Carousel/CarouselComposant/component/CarouselTypeE"; 
import CarouselTypeF from "../../components/Public/Home/Components/Carousel/CarouselComposant/component/CarouselTypeF";
import { themes } from '../All_themes'; 
import { styles } from '../All_styles'; 

const categoryCardMap = {
  typeA: CarouselTypeA,
  typeB: CarouselTypeB,
  typeC: CarouselTypeC,
  typeD: CarouselTypeD,
  typeE: CarouselTypeE,
  typeF: CarouselTypeF,
  
};

const ContainerTypeCatagoryCard = () => {
  const { themeChoice, styleChoice, typeCategoryCard ,loadingSettings} = useAdminContext();
  if (loadingSettings) {
    return <div>Loading...</div>;
  }
  const selectedTheme = themes[themeChoice] || themes.light;
  const selectedStyle = styles[styleChoice];
  const CategoryCardComponent = categoryCardMap[typeCategoryCard] || NavbarTypeA;
  return (
    <ThemeProvider theme={selectedTheme}>
      <div>
        <CategoryCardComponent
          selectedStyle={selectedStyle}
        />
      </div>
    </ThemeProvider>
  );
};

export default ContainerTypeCatagoryCard;
