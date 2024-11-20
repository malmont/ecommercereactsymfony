
import { ThemeProvider } from 'styled-components';
import { useAdminContext } from '../AdminContext';

import DetailsProductCardTypeA from '../../components/Public/Home/Components/Products/DetailProducts/DetailsPorductComponents/DetailsProductCardTypeA';
import DetailsProductCardTypeB from '../../components/Public/Home/Components/Products/DetailProducts/DetailsPorductComponents/DetailsProductCardTypeB';
import DetailsProductCardTypeC from '../../components/Public/Home/Components/Products/DetailProducts/DetailsPorductComponents/DetailsProductCardTypeC';
import DetailsProductCardTypeD from '../../components/Public/Home/Components/Products/DetailProducts/DetailsPorductComponents/DetailsProductCardTypeD';
import DetailsProductCardTypeE from '../../components/Public/Home/Components/Products/DetailProducts/DetailsPorductComponents/DetailsProductCardTypeE';
import DetailsProductCardTypeF from '../../components/Public/Home/Components/Products/DetailProducts/DetailsPorductComponents/DetailsProductCardTypeF';
import { themes } from '../All_themes'; 


const detailsProductCardMap = {
  typeA: DetailsProductCardTypeA,
  typeB: DetailsProductCardTypeB,
  typeC: DetailsProductCardTypeC,
  typeD: DetailsProductCardTypeD,
  typeE: DetailsProductCardTypeE,
  typeF: DetailsProductCardTypeF,
};

const ContainerTypeDetailsProductCard = ({
  category,
  uniqueColors,
  selectedStyle,
  viewModel,
  handleAddToCart,
}) => {
  const { themeChoice, detailsProductCardComponent ,loadingSettings} = useAdminContext();
  if (loadingSettings) {
    return <div>Loading...</div>;
  }
  console.log('themeChoice',themeChoice);
  const selectedTheme = themes[themeChoice] || themes.light;
  const DetailsProductCardComponent = detailsProductCardMap[detailsProductCardComponent] || DetailsProductCardTypeA;
  return (
    <ThemeProvider theme={selectedTheme}>
      <div>
        <DetailsProductCardComponent
          category={category}
          uniqueColors={uniqueColors}
          selectedStyle={selectedStyle}
          viewModel={viewModel}
          handleAddToCart={handleAddToCart}
  
        />
      </div>
    </ThemeProvider>
  );
};

export default ContainerTypeDetailsProductCard;
