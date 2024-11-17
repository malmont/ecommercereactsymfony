
import { useAdminContext } from '../AdminContext';
import { useDependencies } from '../../DependencyContext';
import FeaturesSection from '../ThemeContainer/TypeSection/ContainerFeatureSection';
import CarousselSection from '../ThemeContainer/TypeSection/ContainerCarouselSection';
import EmailSection from '../ThemeContainer/TypeSection/ContainerCarouselSection';
import ExploreSection from '../ThemeContainer/TypeSection/ContainerCarouselSection';
import SliderSection from '../ThemeContainer/TypeSection/ContainerSliderSection';



const navbarMap = {
  typeA: FeaturesSection,
  typeB: CarousselSection,
  typeC: EmailSection,
  typeD: ExploreSection,
  typeE: SliderSection,
};

const ContainerSection1 = () => {
  const {  section1Component,typeComponentSection1,selectTypeProductFetch } = useAdminContext();
  const { carouselViewModelSection1 } = useDependencies();
  const SectionComponent = navbarMap[section1Component] || FeaturesSection;
  console.log('SectionComponent',SectionComponent);
  return (
      <div>
        <SectionComponent
          typeComponentSection={typeComponentSection1}
          selectTypeProductFetch={selectTypeProductFetch}
          carouselViewModelSection={carouselViewModelSection1}
        />
      </div>
  );
};
export default ContainerSection1;
