import { useAdminContext } from '../../AdminContext';
import { useDependencies } from '../../../DependencyContext';
import FeatureTypeA from '../../../components/Public/Home/Components/Header/Feature';
import FeatureTypeB from '../../../components/Public/Home/Components/Header/Feature';
import FeatureTypeD from '../../../components/Public/Home/Components/Header/Feature';
import FeatureTypeC from '../../../components/Public/Home/Components/Header/Feature';
import FeatureTypeE from '../../../components/Public/Home/Components/Header/Feature';
import FeatureTypeF from '../../../components/Public/Home/Components/Header/Feature';
import { themes } from '../../All_themes'; 
import { styles } from '../../All_styles'; 
import { ThemeProvider } from 'styled-components';

const featureMap = {
  typeA: FeatureTypeA,
  typeB: FeatureTypeB,
  typeC: FeatureTypeD,
  typeD: FeatureTypeC,
  typeE: FeatureTypeE,
  typeF: FeatureTypeF,
};

const ContainerFeatureSection = ({typComponent }) => {
  const { themeChoice, styleChoice,loadingSettings } = useAdminContext();
  if (loadingSettings) {
    return <div>Loading...</div>;
  }
  console.log('themeChoice',themeChoice);
  const selectedTheme = themes[themeChoice];
  const selectedStyle = styles[styleChoice];
console.log('themeChoice',themeChoice);
console.log('styleChoice',styleChoice);
  const Feature = featureMap[typComponent] || FeatureTypeA;

  return (
    <ThemeProvider theme={selectedTheme}>
      <div>
        <Feature
          useDependencies={useDependencies}
          selectedStyle={selectedStyle}
        />
      </div>
    </ThemeProvider>
  );
};

export default ContainerFeatureSection;
