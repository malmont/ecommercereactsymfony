
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
  const {  sectionComponent1 } = useAdminContext();
  const SectionComponent = navbarMap[sectionComponent1] || FeaturesSection;
  return (
      <div>
        <SectionComponent
          typComponent={sectionComponent.type}
          useDependencies={useDependencies}
        />
      </div>
  );
};
export default ContainerSection1;
