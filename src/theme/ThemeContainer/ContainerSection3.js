
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

const ContainerSection3 = () => {
  const {  section3Component,typeComponentSection3,selectTypeProductFetchSection3 } = useAdminContext();
  const SectionComponent = navbarMap[section3Component] || FeaturesSection;
  return (
      <div>
        <SectionComponent
          typeComponentSection={typeComponentSection3}
          selectTypeProductFetch={selectTypeProductFetchSection3}
        />
      </div>
  );
};
export default ContainerSection3;
