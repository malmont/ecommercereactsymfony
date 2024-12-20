import { useAdminContext } from '../../AdminContext';
import ExploreCategoryCardTypeA from '../../../components/Public/Home/Components/ExploreAllCategory/Components/ExploreCategoryCardTypeA';
import ExploreCategoryCardTypeB from '../../../components/Public/Home/Components/ExploreAllCategory/Components/ExploreCategoryCardTypeB';
import ExploreCategoryCardTypeC from '../../../components/Public/Home/Components/ExploreAllCategory/Components/ExploreCategoryCardTypeC';
import ExploreCategoryCardTypeD from '../../../components/Public/Home/Components/ExploreAllCategory/Components/ExploreCategoryCardTypeD';
import ExploreCategoryCardTypeE from '../../../components/Public/Home/Components/ExploreAllCategory/Components/ExploreCategoryCardTypeE';
import ExploreCategoryCardTypeF from '../../../components/Public/Home/Components/ExploreAllCategory/Components/ExploreCategoryCardTypeF';
import ExploreCategoryView from '../../../components/Public/Home/Components//ExploreAllCategory/Components/ExploreCategoryView';
import { themes } from '../../All_themes'; 
import { ThemeProvider } from 'styled-components';

const ExploreCategoryMap = {
  typeA: ExploreCategoryCardTypeA,
  typeB: ExploreCategoryCardTypeB,
  typeC: ExploreCategoryCardTypeC,
  typeD: ExploreCategoryCardTypeD,
  typeE: ExploreCategoryCardTypeE,
  typeF: ExploreCategoryCardTypeF,
};

const ContainerExploreCategorySection = ({typeComponentSection }) => {
  const { themeChoice,loadingSettings } = useAdminContext();
  if (loadingSettings) {
    return <div>Loading...</div>;
  }
  const selectedTheme = themes[themeChoice];


  const ExploreCategoryCard = ExploreCategoryMap[typeComponentSection] || ExploreCategoryCardTypeA;

  return (
    <ThemeProvider theme={selectedTheme}>
      <div>
        <ExploreCategoryView
        exploreCategoryCard={ExploreCategoryCard}
        />
      </div>
    </ThemeProvider>
  );
};

export default ContainerExploreCategorySection;
