
import { useAdminContext } from '../AdminContext';
import { useDependencies } from '../../DependencyContext';
import FeaturesSection from '../ThemeContainer/TypeSection/ContainerFeatureSection';
import CarousselSection from '../ThemeContainer/TypeSection/ContainerCarouselSection';
import EmalSection from '../ThemeContainer/TypeSection/ContainerCarouselSection';
import ExploreSection from '../ThemeContainer/TypeSection/ContainerCarouselSection';



const navbarMap = {
  typeA: FeaturesSection,
  typeB: CarousselSection,
  typeC: EmalSection,
  typeD: ExploreSection,
};

const ContainerSection1 = () => {
  const {  section1Component,typeComponentSection1 } = useAdminContext();
  const SectionComponent = navbarMap[section1Component] || FeaturesSection;
  console.log('SectionComponent',SectionComponent);
  return (
      <div>
        <SectionComponent
          typComponent={typeComponentSection1}
          useDependencies={useDependencies}
        />
      </div>
  );
};
export default ContainerSection1;