import React, { useState } from 'react';
import ContainerTypeAdressListCard from '../../../../theme/ThemeContainer/ContainerTypeAdressListCard'; 
import AccountDetails from '../AccountDetails';
import ContainerTypeCarrierListCard from '../../../../theme/ThemeContainer/ContainerTypeCarrierListCard';
import { useDependencies } from '../../../../DependencyContext';
import { styles } from '../../../../theme/AllStyles';
import { useAdminContext } from '../../../../theme/AdminContext';
import ContainerTypeOrderListCard from '../../../../theme/ThemeContainer/ContainerTypeOrderListCard';
import { useTheme } from 'styled-components';
import styled from 'styled-components';

const AccountDashboardCardTypeE = () => {
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
      <DashboardSection>
        {/* Onglets */}
        <DashboardSidebar>
          {tabs.map((item, index) => (
            <TabItem
              key={index}
              isActive={activeTab === item.tab}
              onClick={() => setActiveTab(item.tab)}
            >
              <i className={`${item.icon}`} />
              <p>{item.label}</p>
            </TabItem>
          ))}
        </DashboardSidebar>

        {/* Contenu principal */}
        <DashboardContent>
          {activeTab === 'dashboard' && (
            <selectedStyle.DashboardTabPane>
              <selectedStyle.DashboardCard >
                <selectedStyle.DashboardCardHeader as={DashboardCardHeader}>
                  <h3>Welcome to Your Dashboard</h3>
                </selectedStyle.DashboardCardHeader>
                <selectedStyle.DashboardCardBody>
                  <p>
                    From here, you can manage your orders, addresses, and account details. Quickly
                    access all features in one place.
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
      </DashboardSection>
    </selectedStyle.DashboardWrapper>
  );
};

export default AccountDashboardCardTypeE;

// Styled Components
const DashboardSection = styled.div`
  padding: 5px;
  margin-top: 40px;
  @media (max-width: 768px) {
    margin-top 0;
  }
`;


const DashboardSidebar = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
  width: 100%; 

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 15px;
  }
`;

const TabItem = styled.div`
  cursor: pointer;
  background-color: ${(props) => (props.isActive ? props.theme.colors.buttonBackground : 'transparent')};
  color: ${(props) => (props.isActive ? '#ffffff' : '#000000')};
  border: 1px solid #dee2e6;
  border-radius: 12px;
  padding: 20px;
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
  width: 100%; 
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
`;

const DashboardCardHeader = styled.div`
  padding: 15px;
`;
