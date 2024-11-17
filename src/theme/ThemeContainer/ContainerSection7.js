
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

const ContainerSection7 = () => {
  const {  section7Component,typeComponentSection7 ,selectTypeProductFetchSection7} = useAdminContext();
  const { carouselViewModelSection7 } = useDependencies();
  const SectionComponent = navbarMap[section7Component] || FeaturesSection;
  console.log('SectionComponent',SectionComponent);
  return (
      <div>
        <SectionComponent
          typeComponentSection={typeComponentSection7}
          selectTypeProductFetch={selectTypeProductFetchSection7}
          carouselViewModelSection={carouselViewModelSection7}
        />
      </div>
  );
};
export default ContainerSection7;
