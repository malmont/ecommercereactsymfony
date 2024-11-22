
import { ThemeProvider } from 'styled-components';
import { useAdminContext } from '../AdminContext';

import CheckoutPageCardTypeA from '../../components/Public/Cart/Total/CheckoutPageCard/CheckoutPageCardTypeA';
import CheckoutPageCardTypeB from '../../components/Public/Cart/Total/CheckoutPageCard/CheckoutPageCardTypeB';
import CheckoutPageCardTypeC from '../../components/Public/Cart/Total/CheckoutPageCard/CheckoutPageCardTypeC';
import CheckoutPageCardTypeD from '../../components/Public/Cart/Total/CheckoutPageCard/CheckoutPageCardTypeD';
import CheckoutPageCardTypeE from '../../components/Public/Cart/Total/CheckoutPageCard/CheckoutPageCardTypeE';
import CheckoutPageCardTypeF from '../../components/Public/Cart/Total/CheckoutPageCard/CheckoutPageCardTypeF';

import { themes } from '../All_themes'; 


const checkoutPageCardMap = {
  typeA: CheckoutPageCardTypeA,
  typeB: CheckoutPageCardTypeB,
  typeC: CheckoutPageCardTypeC,
  typeD: CheckoutPageCardTypeD,
  typeE: CheckoutPageCardTypeE,
  typeF: CheckoutPageCardTypeF,

};

const ContainerTypeTotalCheckoutCard = ({  carriers,
  addresses,
  paymentMethods,
  selectedCarrier,
  selectedAddress,
  selectedPaymentMethod,
  selectCarrier,
  selectAddress,
  selectPaymentMethod,}) => {
  const { themeChoice, checkoutCardComponent ,loadingSettings} = useAdminContext();
  if (loadingSettings) {
    return <div>Loading...</div>;
  }
  const selectedTheme = themes[themeChoice] || themes.light;
  const CheckoutCardComponent = checkoutPageCardMap[checkoutCardComponent] || CheckoutPageCardTypeA;
  return (
    <ThemeProvider theme={selectedTheme}>
      <div>
        <CheckoutCardComponent
          carriers={carriers}
          addresses={addresses}
          paymentMethods={paymentMethods}
          selectedCarrier={selectedCarrier}
          selectedAddress={selectedAddress}
          selectedPaymentMethod={selectedPaymentMethod}
          selectCarrier={selectCarrier}
          selectAddress={selectAddress}
          selectPaymentMethod={selectPaymentMethod}
        />
      </div>
    </ThemeProvider>
  );
};

export default ContainerTypeTotalCheckoutCard;
