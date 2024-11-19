import React from 'react';
import { useAdminContext } from '../AdminContext';
import { useDependencies } from '../../DependencyContext';
import FeaturesSection from '../ThemeContainer/TypeSection/ContainerFeatureSection';
import CarousselSection from '../ThemeContainer/TypeSection/ContainerCarouselSection';
import EmailSection from '../ThemeContainer/TypeSection/ContainerEmailSection';
import ExploreSection from './TypeSection/ContainerExploreCategorySection';
import SliderSection from '../ThemeContainer/TypeSection/ContainerSliderSection';

const containerSectionMap = {
  typeA: FeaturesSection,
  typeB: CarousselSection,
  typeC: EmailSection,
  typeD: ExploreSection,
  typeE: SliderSection,
};

const ContainerSection = ({
  sectionComponentKey,
  typeComponentSectionKey,
  selectTypeProductFetchKey,
  carouselViewModelKey,
}) => {
  const adminContext = useAdminContext();
  const dependencies = useDependencies();

  const sectionComponent = adminContext[sectionComponentKey];
  const typeComponentSection = adminContext[typeComponentSectionKey];
  const selectTypeProductFetch = adminContext[selectTypeProductFetchKey];
  const carouselViewModelSection = dependencies[carouselViewModelKey];

  const SectionComponent = containerSectionMap[sectionComponent] || FeaturesSection;

  return (
    <div>
      <SectionComponent
        typeComponentSection={typeComponentSection}
        selectTypeProductFetch={selectTypeProductFetch}
        carouselViewModelSection={carouselViewModelSection}
      />
    </div>
  );
};

export default ContainerSection;
