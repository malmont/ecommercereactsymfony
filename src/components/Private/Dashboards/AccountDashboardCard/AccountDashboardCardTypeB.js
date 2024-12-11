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

const AccountDashboardCardTypeB = () => {
  const { orderListViewModel, addressListViewModel, carrierListViewModel } = useDependencies();
  const [activeTab, setActiveTab] = useState('dashboard');
  const { styleChoice } = useAdminContext();
  const selectedStyle = styles[styleChoice];
  const theme = useTheme();
  return (
    <selectedStyle.DashboardWrapper>
      <div className="section">
        <div className="container">
          <div className="row">
            <selectedStyle.DashboardSidebar as={DashboardSidebar} className="col m-3">
              <ul className="nav nav-tabs flex-column" role="tablist">
                {[
                  { tab: 'dashboard', label: 'Dashboard', icon: 'ti-layout-grid2' },
                  { tab: 'orders', label: 'Orders', icon: 'ti-shopping-cart-full' },
                  { tab: 'address', label: 'My Address', icon: 'ti-location-pin' },
                  { tab: 'carriers', label: 'Carriers', icon: 'ti-truck' },
                  { tab: 'accountDetails', label: 'Account details', icon: 'ti-id-badge' },
                  { tab: 'logout', label: 'Logout', icon: 'ti-lock', link: '/logout' },
                ].map((item, index) => (
                  <selectedStyle.DashboardNavItem key={index}>
                  <selectedStyle.DashboardNavLink as={DashboardNavLink}
                      className={activeTab === item.tab ? 'active' : ''}
                      to={item.link || '#'}
                      onClick={() => item.link ? null : setActiveTab(item.tab)}>
                      <i className={`${item.icon}`}></i>
                      {item.label}
                    </selectedStyle.DashboardNavLink>
                  </selectedStyle.DashboardNavItem>
                ))}
              </ul>
            </selectedStyle.DashboardSidebar>
 
            {/* Main Content */}
            <selectedStyle.DashboardContent as={DashboardContent}
              className="col-lg-9 col-md-8 mt-3" >
              {activeTab === 'dashboard' && (
                <selectedStyle.DashboardTabPane >
                  <selectedStyle.DashboardCard as = {DashboardCard}>
                    <selectedStyle.DashboardCardHeader>
                      <h3>Welcome to Your Dashboard</h3>
                    </selectedStyle.DashboardCardHeader>
                    <selectedStyle.DashboardCardBody as ={DashboardCardBody}>
                      <p>
                        Manage your orders, addresses, carriers, and account details easily from here.
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
          </div>
        </div>
      </div>
    </selectedStyle.DashboardWrapper>
  );
};

export default AccountDashboardCardTypeB;

const DashboardSidebar = styled.div`
  background-color: ${(props) => props.theme.colors.cardBackground};
  border-radius: 12px;
  color: ${(props) => props.theme.colors.cardBodyText};
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 15px; 
    border-radius: 8px; 
  }
`;

const DashboardNavLink = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 8px;
  background-color: ${(props) =>
    props.isActive ? props.theme.colors.buttonBackground : "transparent"};
  color: ${(props) =>
    props.isActive
      ? props.theme.colors.cardBodyText
      : props.theme.colors.buttonBackground};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.colors.buttonBackgroundHover || props.theme.colors.buttonBackground};
  }

  i {
   margin-right: 10px;
  }
`;

const DashboardContent = styled.div`
  background-color: ${(props) => props.theme.colors.contentBackground};
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin :auto;
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const DashboardCard= styled.div`
  background-color: ${(props) => props.theme.colors.cardBackground};
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const DashboardCardBody = styled.div`
  padding: 20px;
`;