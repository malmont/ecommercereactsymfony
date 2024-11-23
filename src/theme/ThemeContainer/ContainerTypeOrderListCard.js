
import { ThemeProvider } from 'styled-components';
import { useAdminContext } from '../AdminContext';
import OrderListCardTypeA from '../../components/Private/Dashboards/OrderListCard/OrderListCardTypeA';
import OrderListCardTypeB from '../../components/Private/Dashboards/OrderListCard/OrderListCardTypeB';
import OrderListCardTypeC from '../../components/Private/Dashboards/OrderListCard/OrderListCardTypeC';
import OrderListCardTypeD from '../../components/Private/Dashboards/OrderListCard/OrderListCardTypeD';
import OrderListCardTypeE from '../../components/Private/Dashboards/OrderListCard/OrderListCardTypeE';
import OrderListCardTypeF from '../../components/Private/Dashboards/OrderListCard/OrderListCardTypeF';
import { themes } from '../All_themes'; 


const OrderListCardMap = {
  typeA: OrderListCardTypeA,
  typeB: OrderListCardTypeB,
  typeC: OrderListCardTypeC,
  typeD: OrderListCardTypeD,
  typeE: OrderListCardTypeE,
  typeF: OrderListCardTypeF,
  
};

const ContainerTypeOrderListCard = ({ viewModel }) => {
  const { themeChoice, orderListCardComponent ,loadingSettings} = useAdminContext();
  if (loadingSettings) {
    return <div>Loading...</div>;
  }
  console.log('themeChoice',themeChoice);
  const selectedTheme = themes[themeChoice] || themes.light;

  const OrderListCardComponent = OrderListCardMap[orderListCardComponent] || OrderListCardTypeA;
  return (
    <ThemeProvider theme={selectedTheme}>
      <div>
        <OrderListCardComponent
          viewModel={viewModel}

        />
      </div>
    </ThemeProvider>
  );
};

export default ContainerTypeOrderListCard;
