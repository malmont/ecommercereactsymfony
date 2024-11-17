
import { useAdminContext } from '../AdminContext';
import { useDependencies } from '../../DependencyContext';
import FeaturesSection from './TypeSection/ContainerFeatureSection';
import CarousselSection from './TypeSection/ContainerCarouselSection';
import EmalSection from './TypeSection/ContainerCarouselSection';
import ExploreSection from './TypeSection/ContainerCarouselSection';



const navbarMap = {
  typeA: FeaturesSection,
  typeB: CarousselSection,
  typeC: EmalSection,
  typeD: ExploreSection,
};

const ContainerSection5 = () => {
  const {  section5Component,typeComponentSection5 ,selectTypeProductFetchSection5} = useAdminContext();
  const { carouselViewModelSection5 } = useDependencies();
  const SectionComponent = navbarMap[section5Component] || FeaturesSection;
  console.log('SectionComponent',SectionComponent);
  return (
      <div>
        <SectionComponent
          typeComponentSection={typeComponentSection5}
          selectTypeProductFetch={selectTypeProductFetchSection5}
          carouselViewModelSection={carouselViewModelSection5}
        />
      </div>
  );
};
export default ContainerSection5;
