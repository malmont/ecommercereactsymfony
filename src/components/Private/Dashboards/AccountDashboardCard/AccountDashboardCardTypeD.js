import React, { useState } from 'react';
import ContainerTypeAdressListCard from '../../../../theme/ThemeContainer/ContainerTypeAdressListCard'; 
import AccountDetails from '../AccountDetails';
import ContainerTypeCarrierListCard from '../../../../theme/ThemeContainer/ContainerTypeCarrierListCard';
import { useDependencies } from '../../../../DependencyContext';
import { styles } from '../../../../theme/AllStyles';
import { useAdminContext } from '../../../../theme/AdminContext';
import ContainerTypeOrderListCard from '../../../../theme/ThemeContainer/ContainerTypeOrderListCard';
import styled from 'styled-components';

const AccountDashboardCardTypeD = () => {
  const { orderListViewModel, addressListViewModel, carrierListViewModel } = useDependencies();
  const [activeTab, setActiveTab] = useState('dashboard');
  const { styleChoice } = useAdminContext();
  const selectedStyle = styles[styleChoice];

  const tabs = [
    { tab: 'dashboard', label: 'Dashboard', icon: 'ti-layout-grid2' },
    { tab: 'orders', label: 'Orders', icon: 'ti-shopping-cart-full' },
    { tab: 'address', label: 'My Address', icon: 'ti-location-pin' },
    { tab: 'carriers', label: 'Carriers', icon: 'ti-truck' },
    { tab: 'accountDetails', label: 'Account details', icon: 'ti-id-badge' },
    { tab: 'logout', label: 'Logout', icon: 'ti-lock', link: '/logout' },
  ];

  return (
    <selectedStyle.DashboardWrapper>
      <DashboardSection>
        {/* Sidebar */}
        <selectedStyle.DashboardSidebar as={DashboardSidebar} className="col-lg-2 col-md-4">
          <ul className="nav nav-tabs flex-column" role="tablist">
            {tabs.map((item, index) => (
              <selectedStyle.DashboardNavItem key={index}>
                <selectedStyle.DashboardNavLink
                  as={DashboardNavLink}
                  className={activeTab === item.tab ? 'active' : ''}
                  to={item.link || '#'}
                  isActive={activeTab === item.tab}
                  onClick={() => item.link ? null : setActiveTab(item.tab)}
                >
                  <i className={item.icon}></i>
                  {item.label}
                </selectedStyle.DashboardNavLink>
              </selectedStyle.DashboardNavItem>
            ))}
          </ul>
        </selectedStyle.DashboardSidebar>

        {/* Main Content */}
        <selectedStyle.DashboardContent as={DashboardContent}  className="col-lg-7 col-md-8">
          {activeTab === 'dashboard' && (
            <selectedStyle.DashboardTabPane>
              <selectedStyle.DashboardCard as={DashboardCard}>
                <selectedStyle.DashboardCardHeader as={DashboardCardHeader}>
                  <h3>HELLO</h3>
                </selectedStyle.DashboardCardHeader>
                <selectedStyle.DashboardCardBody as={DashboardCardBody}>
                  <p>
                    From your account dashboard, you can easily check & view your recent orders,
                    manage your shipping and billing addresses, and edit your password and account details.
                  </p>
                </selectedStyle.DashboardCardBody>
              </selectedStyle.DashboardCard>
            </selectedStyle.DashboardTabPane>
          )}
          {activeTab === 'orders' && <ContainerTypeOrderListCard viewModel={orderListViewModel} />}
          {activeTab === 'address' && <ContainerTypeAdressListCard viewModel={addressListViewModel} />}
          {activeTab === 'carriers' && <ContainerTypeCarrierListCard viewModel={carrierListViewModel} />}
          {activeTab === 'accountDetails' && <AccountDetails />}
        </selectedStyle.DashboardContent>
      </DashboardSection>
    </selectedStyle.DashboardWrapper>
  );
};

export default AccountDashboardCardTypeD;

// Styled Components
const DashboardSection = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const DashboardSidebar = styled.div`
  background-color: ${(props) => props.theme.colors.sidebarBackground || '#ffffff'};
  color: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const DashboardNavLink = styled.div`
  color: ${(props) => (props.isActive ? '#007bff' : '#adb5bd')};
  font-weight: ${(props) => (props.isActive ? 'bold' : 'normal')};
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-radius: 8px;
  background-color: ${(props) => (props.isActive ? '#e9ecef' : 'transparent')};
  transition: all 0.3s;

  &:hover {
    background-color: #f8f9fa;
  }
`;

const DashboardContent = styled.div`
  padding: 5px;
`;

const DashboardCard = styled.div`
  border: 1px solid #dee2e6;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const DashboardCardHeader = styled.div`
  margin-bottom: 15px;
`;

const DashboardCardBody = styled.div``;
