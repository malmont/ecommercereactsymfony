
import { ThemeProvider } from 'styled-components';
import { useAdminContext } from '../AdminContext';
import CarrierListCardTypeA from '../../components/Private/Dashboards/CarrierListCard/CarrierListCardTypeA';
import CarrierListCardTypeB from '../../components/Private/Dashboards/CarrierListCard/CarrierListCardTypeB';
import CarrierListCardTypeC from '../../components/Private/Dashboards/CarrierListCard/CarrierListCardTypeC';
import CarrierListCardTypeD from '../../components/Private/Dashboards/CarrierListCard/CarrierListCardTypeD';
import CarrierListCardTypeE from '../../components/Private/Dashboards/CarrierListCard/CarrierListCardTypeE';
import CarrierListCardTypeF from '../../components/Private/Dashboards/CarrierListCard/CarrierListCardTypeF';

import { themes } from '../All_themes'; 

const CarrierListCardMap = {
  typeA: CarrierListCardTypeA,
  typeB: CarrierListCardTypeB,
  typeC: CarrierListCardTypeC,
  typeD: CarrierListCardTypeD,
  typeE: CarrierListCardTypeE,
  typeF: CarrierListCardTypeF
  
};

const ContainerTypeCarrierListCard = ({ viewModel }) => {
  const { themeChoice, carrierListCardComponent ,loadingSettings} = useAdminContext();
  if (loadingSettings) {
    return <div>Loading...</div>;
  }
  const selectedTheme = themes[themeChoice] || themes.light;

  const CarrierListCardComponent = CarrierListCardMap[carrierListCardComponent] || CarrierListCardTypeA;
  return (
    <ThemeProvider theme={selectedTheme}>
      <div>
        <CarrierListCardComponent
          viewModel={viewModel}

        />
      </div>
    </ThemeProvider>
  );
};

export default ContainerTypeCarrierListCard;
