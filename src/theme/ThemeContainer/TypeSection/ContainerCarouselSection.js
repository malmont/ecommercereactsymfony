import { useAdminContext } from '../AdminContext';
import { useDependencies } from '../../DependencyContext';
import CarouselTypeA from '../../../components/Public/Home/Components/Carousel/BesSeller/CarousselBestSellerView';
import CarouselTypeB from '../../../components/Public/Home/Components/Carousel/CarouselComp/CarouselView';
import CarouselTypeD from '../../../components/Public/Home/Components/Carousel/NewArrival/CarouselNewArrivalView';
import CarouselTypeC from  '../../../components/Public/Home/Components/Carousel/NewArrival/CarouselNewArrivalView';
import { themes } from '../All_themes'; 
import { styles } from '../All_styles'; 


const carouselMap = {
  typeA: CarouselTypeA,
  typeB: CarouselTypeB,
  typeC: CarouselTypeC,
  typeD: CarouselTypeD,
};

const ContainerFeatureSection = ({typComponent }) => {
  const { themeChoice, styleChoice } = useAdminContext();

  const selectedTheme = themes[themeChoice];
  const selectedStyle = styles[styleChoice];

  const Carousel = carouselMap[typComponent] || CarouselTypeA;

  return (
    <Carousel theme={selectedTheme}>
      <div>
        <NavbarComponent
          useDependencies={useDependencies}
          selectedStyle={selectedStyle}
        />
      </div>
    </Carousel>
  );
};

export default ContainerFeatureSection;
