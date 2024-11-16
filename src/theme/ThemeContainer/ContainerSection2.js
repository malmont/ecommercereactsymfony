
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

const ContainerSection2 = () => {
  const {  section2Component,typeComponentSection2, selectTypeProductFetchSection2} = useAdminContext();
  const { carouselViewModelSection2 } = useDependencies();
  const SectionComponent = navbarMap[section2Component] || FeaturesSection;
  return (
      <div>
        <SectionComponent
          typeComponentSection={typeComponentSection2}
          selectTypeProductFetch={selectTypeProductFetchSection2}
          carouselViewModelSection={carouselViewModelSection2}
        />
      </div>
  );
};
export default ContainerSection2;
