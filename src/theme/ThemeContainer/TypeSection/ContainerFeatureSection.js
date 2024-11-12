import { useAdminContext } from '../AdminContext';
import { useDependencies } from '../../DependencyContext';
import FeatureTypeA from '../../../components/Public/Home/Components/Header/Feature';
import FeatureTypeB from '../../../components/Public/Home/Components/Header/Feature';
import FeatureTypeD from '../../../components/Public/Home/Components/Header/Feature';
import FeatureTypeC from '../../../components/Public/Home/Components/Header/Feature';
import { themes } from '../All_themes'; 
import { styles } from '../All_styles'; 


const featureMap = {
  typeA: FeatureTypeA,
  typeB: FeatureTypeB,
  typeC: FeatureTypeD,
  typeD: FeatureTypeC,
};

const ContainerFeatureSection = ({typComponent }) => {
  const { themeChoice, styleChoice } = useAdminContext();

  const selectedTheme = themes[themeChoice];
  const selectedStyle = styles[styleChoice];

  const Feature = featureMap[typComponent] || FeaturesTypeA;

  return (
    <Feature theme={selectedTheme}>
      <div>
        <NavbarComponent
          useDependencies={useDependencies}
          selectedStyle={selectedStyle}
        />
      </div>
    </Feature>
  );
};

export default ContainerFeatureSection;
