
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

const ContainerSection4 = () => {
  const {  section4Component,typeComponentSection4 ,selectTypeProductFetchSection4} = useAdminContext();
  const SectionComponent = navbarMap[section4Component] || FeaturesSection;
  console.log('SectionComponent',SectionComponent);
  return (
      <div>
        <SectionComponent
          typeComponentSection={typeComponentSection4}
          selectTypeProductFetch={selectTypeProductFetchSection4}
        />
      </div>
  );
};
export default ContainerSection4;
