
import { ThemeProvider } from 'styled-components';
import { useAdminContext } from '../AdminContext';

import TotalCardTypeA from '../../components/Public/Cart/Total/TotalCard/TotalCardTypeA';
import TotalCardTypeB from '../../components/Public/Cart/Total/TotalCard/TotalCardTypeB';
import TotalCardTypeC from '../../components/Public/Cart/Total/TotalCard/TotalCardTypeC';
import TotalCardTypeD from '../../components/Public/Cart/Total/TotalCard/TotalCardTypeD';
import TotalCardTypeE from '../../components/Public/Cart/Total/TotalCard/TotalCardTypeE';
import TotalCardTypeF from '../../components/Public/Cart/Total/TotalCard/TotalCardTypeF';

import { themes } from '../All_themes'; 


const totalCardMap = {
  typeA: TotalCardTypeA,
  typeB: TotalCardTypeB,
  typeC: TotalCardTypeC,
  typeD: TotalCardTypeD,
  typeE: TotalCardTypeE,
  typeF: TotalCardTypeF,
};

const ContainerTypeTotalCard = ({ handleCheckout, buttonLabel = 'Proceed to Checkout' }) => {
  const { themeChoice, totalCardComponent ,loadingSettings} = useAdminContext();
  if (loadingSettings) {
    return <div>Loading...</div>;
  }
  console.log('themeChoice',themeChoice);
  const selectedTheme = themes[themeChoice] || themes.light;
  const TotalCardComponent = totalCardMap[totalCardComponent] || TotalCardTypeA;
  return (
    <ThemeProvider theme={selectedTheme}>
      <div>
        <TotalCardComponent
          handleCheckout={handleCheckout}
          buttonLabel={buttonLabel}
        />
      </div>
    </ThemeProvider>
  );
};

export default ContainerTypeTotalCard;
