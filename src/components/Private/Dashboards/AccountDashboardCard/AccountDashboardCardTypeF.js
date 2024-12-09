import React, { useState } from 'react';
import ContainerTypeAdressListCard from '../../../../theme/ThemeContainer/ContainerTypeAdressListCard';
import AccountDetails from '../AccountDetails';
import ContainerTypeCarrierListCard from '../../../../theme/ThemeContainer/ContainerTypeCarrierListCard';
import { useDependencies } from '../../../../DependencyContext';
import { styles } from '../../../../theme/AllStyles';
import { useAdminContext } from '../../../../theme/AdminContext';
import ContainerTypeOrderListCard from '../../../../theme/ThemeContainer/ContainerTypeOrderListCard';
import styled from 'styled-components';
import { useTheme } from 'styled-components';

const AccountDashboardCardTypeF = () => {
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
      <DashboardContainer>
        {/* Sidebar */}
        <selectedStyle.DashboardSidebar>
          <SidebarHeader>Account Menu</SidebarHeader>
          <SidebarNav>
            {tabs.map((item, index) => (
              <selectedStyle.DashboardNavItem as = {DashboardNavItem}
              key={index}
              isActive={activeTab === item.tab}
              onClick={() => setActiveTab(item.tab)}>
                <i className={item.icon}></i>
                {item.label}
              </selectedStyle.DashboardNavItem>
            ))}
          </SidebarNav>
        </selectedStyle.DashboardSidebar>

        {/* Main Content */}
        <MainContent>
          {/* Header Section */}
          <Header>
            <h3>{tabs.find((tab) => tab.tab === activeTab)?.label}</h3>
          </Header>

          {/* Content Section */}
          <Content>
            {activeTab === 'dashboard' && (
              <selectedStyle.DashboardTabPane>
                <selectedStyle.DashboardCard>
                  <selectedStyle.DashboardCardHeader>
                    <h3>Welcome to Your Dashboard</h3>
                  </selectedStyle.DashboardCardHeader>
                  <selectedStyle.DashboardCardBody>
                    <p>
                      Use this dashboard to manage your orders, addresses, carriers, and account
                      details.
                    </p>
                  </selectedStyle.DashboardCardBody>
                </selectedStyle.DashboardCard>
              </selectedStyle.DashboardTabPane>
            )}
            {activeTab === 'orders' && <ContainerTypeOrderListCard viewModel={orderListViewModel} />}
            {activeTab === 'address' && <ContainerTypeAdressListCard viewModel={addressListViewModel} />}
            {activeTab === 'carriers' && <ContainerTypeCarrierListCard viewModel={carrierListViewModel} />}
            {activeTab === 'accountDetails' && <AccountDetails />}
          </Content>
        </MainContent>
      </DashboardContainer>
    </selectedStyle.DashboardWrapper>
  );
};

export default AccountDashboardCardTypeF;

const DashboardContainer = styled.div`
  display: flex;
  padding: 20px;
  Gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0;
  }
`;

const SidebarHeader = styled.h3`
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 18px;
  padding: 10px;

`;

const SidebarNav = styled.ul`
  list-style: none;
  padding: 0;
  
`;

const MainContent = styled.div`

  background-color: #f8f9fa;
  marrgin-top: 20px;
  margin:auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Header = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const Content = styled.div`
  flex: 1;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
`;
const DashboardNavItem = styled.li`
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 8px;
  background-color: ${(props) =>
    props.isActive ? props.theme.colors.buttonBackground : "transparent"};
  color: ${(props) => (props.isActive ? "#fff" : "#adb5bd")};
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 10px;

  i {
    font-size: 18px;
  }
`;