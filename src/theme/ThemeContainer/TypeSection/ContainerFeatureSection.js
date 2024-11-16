import { useAdminContext } from '../../AdminContext';
import FeatureTypeA from '../../../components/Public/Home/Components/Feature/FeatureTypeA';
import FeatureTypeB from '../../../components/Public/Home/Components/Header/Feature';
import FeatureTypeD from '../../../components/Public/Home/Components/Header/Feature';
import FeatureTypeC from '../../../components/Public/Home/Components/Header/Feature';
import FeatureTypeE from '../../../components/Public/Home/Components/Header/Feature';
import FeatureTypeF from '../../../components/Public/Home/Components/Header/Feature';
import { themes } from '../../All_themes'; 
import { ThemeProvider } from 'styled-components';

const featureMap = {
  typeA: FeatureTypeA,
  typeB: FeatureTypeB,
  typeC: FeatureTypeD,
  typeD: FeatureTypeC,
  typeE: FeatureTypeE,
  typeF: FeatureTypeF,
};

const ContainerFeatureSection = ({typeComponentSection }) => {
  const { themeChoice,loadingSettings } = useAdminContext();
  if (loadingSettings) {
    return <div>Loading...</div>;
  }
  const selectedTheme = themes[themeChoice];


  const Feature = featureMap[typeComponentSection] || FeatureTypeA;

  return (
    <ThemeProvider theme={selectedTheme}>
      <div>
        <Feature

        />
      </div>
    </ThemeProvider>
  );
};

export default ContainerFeatureSection;
