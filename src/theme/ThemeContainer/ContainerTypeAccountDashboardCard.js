import React, { Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { useAdminContext } from '../AdminContext';

import AccountDashboardCardTypeA from '../../components/Private/Dashboards/AccountDashboardCard/AccountDashboardCardTypeA';
import AccountDashboardCardTypeB from '../../components/Private/Dashboards/AccountDashboardCard/AccountDashboardCardTypeB';
import AccountDashboardCardTypeC from '../../components/Private/Dashboards/AccountDashboardCard/AccountDashboardCardTypeC';
import AccountDashboardCardTypeD from '../../components/Private/Dashboards/AccountDashboardCard/AccountDashboardCardTypeD';
import AccountDashboardCardTypeE from '../../components/Private/Dashboards/AccountDashboardCard/AccountDashboardCardTypeE';
import AccountDashboardCardTypeF from '../../components/Private/Dashboards/AccountDashboardCard/AccountDashboardCardTypeF';
import { themes } from '../All_themes'; 


const accountDashboardCardMap = {
  typeA: AccountDashboardCardTypeA,
  typeB: AccountDashboardCardTypeB,
  typeC: AccountDashboardCardTypeC,
  typeD: AccountDashboardCardTypeD,
  typeE: AccountDashboardCardTypeE,
  typeF: AccountDashboardCardTypeF,

};

const ContainerTypeAccountDashboardCard = () => {
  const { themeChoice, accountDashboardComponent ,loadingSettings} = useAdminContext();
  if (loadingSettings) {
    return <div>Loading...</div>;
  }
  console.log('themeChoice',themeChoice);
  const selectedTheme = themes[themeChoice] || themes.light;
  const AccountDashboardComponent = accountDashboardCardMap[accountDashboardComponent] || AccountDashboardCardTypeA;
  return (
    <ThemeProvider theme={selectedTheme}>
      <div>
        <AccountDashboardComponent

        />
      </div>
    </ThemeProvider>
  );
};

export default ContainerTypeAccountDashboardCard;
