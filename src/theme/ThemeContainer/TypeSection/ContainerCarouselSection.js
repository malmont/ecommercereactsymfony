import { useAdminContext } from '../../AdminContext';
import { useDependencies } from '../../../DependencyContext';
import CarouselTypeA from '../../../components/Public/Home/Components/Carousel/BesSeller/CarousselBestSellerView';
import CarouselTypeB from '../../../components/Public/Home/Components/Carousel/CarouselComp/CarouselView';
import CarouselTypeD from '../../../components/Public/Home/Components/Carousel/NewArrival/CarouselNewArrivalView';
import CarouselTypeC from  '../../../components/Public/Home/Components/Carousel/Carouselcomp2/CarouselComp2View';
import CarouselTypeE from '../../../components/Public/Home/Components/Carousel/Carouselcomp3/CarouselComp3View';
import CarouselTypeF from '../../../components/Public/Home/Components/Carousel/Carouselcomp4/CarouselComp4View';
import { themes } from '../../All_themes'; 
import { ThemeProvider } from 'styled-components';

const carouselMap = {
  typeA: CarouselTypeA,
  typeB: CarouselTypeB,
  typeC: CarouselTypeC,
  typeD: CarouselTypeD,
  typeE: CarouselTypeE,
  typeF: CarouselTypeF,
};

const ContainerCarouselSection = ({typComponent }) => {
  const { themeChoice,loadingSettings } = useAdminContext();
  if (loadingSettings) {
    return <div>Loading...</div>;
  }

  const selectedTheme = themes[themeChoice];
  

  const Carousel = carouselMap[typComponent] || CarouselTypeA;

  return (
    <ThemeProvider theme={selectedTheme}>
      <div>
        <Carousel
          useDependencies={useDependencies}
      
        />
      </div>
    </ThemeProvider>
  );
};

export default ContainerCarouselSection;
