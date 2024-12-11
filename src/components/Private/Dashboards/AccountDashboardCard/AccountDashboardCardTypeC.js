import React, { useState } from 'react';
import ContainerTypeAdressListCard from '../../../../theme/ThemeContainer/ContainerTypeAdressListCard'; 
import AccountDetails from '../AccountDetails';
import ContainerTypeCarrierListCard from '../../../../theme/ThemeContainer/ContainerTypeCarrierListCard';
import { useDependencies } from '../../../../DependencyContext';
import { styles } from '../../../../theme/AllStyles';
import { useAdminContext } from '../../../../theme/AdminContext';
import ContainerTypeOrderListCard from '../../../../theme/ThemeContainer/ContainerTypeOrderListCard';
import { useTheme,styled } from 'styled-components';

const AccountDashboardCardTypeC = () => {
  const { orderListViewModel, addressListViewModel, carrierListViewModel } = useDependencies();
  const [activeTab, setActiveTab] = useState('dashboard');
  const { styleChoice } = useAdminContext();
  const selectedStyle = styles[styleChoice];
  const theme = useTheme();
  const tabs = [
    { tab: 'dashboard', label: 'Dashboard', icon: 'ti-layout-grid2' },
    { tab: 'orders', label: 'Orders', icon: 'ti-shopping-cart-full' },
    { tab: 'address', label: 'My Address', icon: 'ti-location-pin' },
    { tab: 'carriers', label: 'Carriers', icon: 'ti-truck' },
    { tab: 'accountDetails', label: 'Account details', icon: 'ti-id-badge' },
  ];

  return (
    <selectedStyle.DashboardWrapper>
      <div className="section">
        <div className="container">
         <TabContainer className="row justify-content-center" >
            {tabs.map((item, index) => (
              <TabItem
              key={index}
              isActive={activeTab === item.tab}
              onClick={() => setActiveTab(item.tab)}>
                <i className={item.icon} ></i>
                <p >{item.label}</p>
              </TabItem>
            ))}
          </TabContainer>
          {/* <DashboardContent className="row"> */}
          <DashboardContent >
            {activeTab === 'dashboard' && (
              <selectedStyle.DashboardTabPane>
                <selectedStyle.DashboardCard>
                  <selectedStyle.DashboardCardHeader as ={DashboardCardHeader}>
                    <h3>Welcome Back!</h3>
                  </selectedStyle.DashboardCardHeader>
                  <selectedStyle.DashboardCardBody as ={DashboardCardBody}>
                    <p>
                      Use this dashboard to view your orders, manage addresses, carriers, and update your account details.
                    </p>
                  </selectedStyle.DashboardCardBody>
                </selectedStyle.DashboardCard>
              </selectedStyle.DashboardTabPane>
            )}
            {activeTab === 'orders' && <ContainerTypeOrderListCard viewModel={orderListViewModel} />}
            {activeTab === 'address' && <ContainerTypeAdressListCard viewModel={addressListViewModel} />}
            {activeTab === 'carriers' && <ContainerTypeCarrierListCard viewModel={carrierListViewModel} />}
            {activeTab === 'accountDetails' && <AccountDetails />}
          </DashboardContent>
        </div>
      </div>
    </selectedStyle.DashboardWrapper>
  );
};

export default AccountDashboardCardTypeC;

const TabContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
  margin-top: 50px;
`;

const TabItem = styled.div`
  cursor: pointer;
  background-color: ${(props) => (props.isActive ? props.theme.colors.buttonBackground : 'transparent')};
  color: ${(props) => (props.isActive ? props.theme.colors.tableText : props.theme.colors.buttonBackground)};
  border: 1px solid #dee2e6;
  border-radius: 12px;
  padding: 10px;
  text-align: center;
  box-shadow: ${(props) =>
    props.isActive ? '0 4px 12px rgba(0, 123, 255, 0.3)' : '0 2px 6px rgba(0, 0, 0, 0.1)'};
  transition: all 0.3s ease;
    i {
    font-size: 24px;
    margin-bottom: 10px;
  }

  p {
    margin: 0;
    font-weight: bold;
  }
`;

const DashboardContent = styled.div`
  background-color: ${(props) => props.theme.colors.contentBackground};
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-left: 20px;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;


const DashboardCardHeader = styled.div`
  background-color: ${(props) => props.theme.colors.buttonBackground};
  color: #ffffff;
  padding: 15px;
  border-radius: 12px 12px 0 0;
`;

const DashboardCardBody = styled.div`
  padding: 20px;
`;

