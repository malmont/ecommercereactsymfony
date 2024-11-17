
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

const ContainerSection6 = () => {
  const {  section6Component,typeComponentSection6 ,selectTypeProductFetchSection6} = useAdminContext();
  const { carouselViewModelSection6 } = useDependencies();
  const SectionComponent = navbarMap[section6Component] || FeaturesSection;
  console.log('SectionComponent',SectionComponent);
  return (
      <div>
        <SectionComponent
          typeComponentSection={typeComponentSection6}
          selectTypeProductFetch={selectTypeProductFetchSection6}
          carouselViewModelSection={carouselViewModelSection6}
        />
      </div>
  );
};
export default ContainerSection6;
