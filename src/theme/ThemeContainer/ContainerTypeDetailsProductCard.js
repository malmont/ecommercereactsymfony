import React, { Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { useAdminContext } from '../AdminContext';

import DetailsProductCardTypeA from '../../components/Public/Home/Components/Products/DetailProducts/DetailsPorductComponents/DetailsProductCardTypeA';
import DetailsProductCardTypeB from '../../components/Public/Home/Components/Products/DetailProducts/DetailsPorductComponents/DetailsProductCardTypeA';
import DetailsProductCardTypeC from '../../components/Public/Home/Components/Products/DetailProducts/DetailsPorductComponents/DetailsProductCardTypeA';
import DetailsProductCardTypeD from '../../components/Public/Home/Components/Products/DetailProducts/DetailsPorductComponents/DetailsProductCardTypeA';
import DetailsProductCardTypeE from '../../components/Public/Home/Components/Products/DetailProducts/DetailsPorductComponents/DetailsProductCardTypeA';
import DetailsProductCardTypeF from '../../components/Public/Home/Components/Products/DetailProducts/DetailsPorductComponents/DetailsProductCardTypeA';
import { themes } from '../All_themes'; 


const detailsProductCardMap = {
  typeA: DetailsProductCardTypeA,
  typeB: DetailsProductCardTypeB,
  typeC: DetailsProductCardTypeC,
  typeD: DetailsProductCardTypeD,
  typeE: DetailsProductCardTypeE,
  typeF: DetailsProductCardTypeF,
};

const ContainerTypeDetailsProductCard = () => {
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
  
        />
      </div>
    </ThemeProvider>
  );
};

export default ContainerTypeDetailsProductCard;
