import React, { useState } from 'react';
import ContainerTypeAdressListCard from '../../../../theme/ThemeContainer/ContainerTypeAdressListCard'; 
import AccountDetails from '../AccountDetails';
import ContainerTypeCarrierListCard from '../../../../theme/ThemeContainer/ContainerTypeCarrierListCard';
import { useDependencies } from '../../../../DependencyContext';
import { styles } from '../../../../theme/AllStyles';
import { useAdminContext } from '../../../../theme/AdminContext';
import ContainerTypeOrderListCard from '../../../../theme/ThemeContainer/ContainerTypeOrderListCard';

const AccountDashboardCardTypeB = () => {
  const { orderListViewModel, addressListViewModel, carrierListViewModel } = useDependencies();
  const [activeTab, setActiveTab] = useState('dashboard');
  const { styleChoice } = useAdminContext();
  const selectedStyle = styles[styleChoice];

  return (
    <selectedStyle.DashboardWrapper>
      <div className="section">
        <div className="container">
          <div className="row">
            {/* Sidebar with modified styles */}
            <selectedStyle.DashboardSidebar
              className="col "
              style={{
                backgroundColor: "#f8f9fa", // Light background for contrast
                borderRadius: "12px", // Slightly rounded corners
                padding: "20px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow
              }}
            >
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
                    <selectedStyle.DashboardNavLink
                      className={activeTab === item.tab ? 'active' : ''}
                      to={item.link || '#'}
                      onClick={() => item.link ? null : setActiveTab(item.tab)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "10px",
                        borderRadius: "8px",
                        backgroundColor: activeTab === item.tab ? "#007bff" : "transparent",
                        color: activeTab === item.tab ? "#fff" : "#000",
                        transition: "background-color 0.3s",
                      }}
                    >
                      <i className={`${item.icon}`} style={{ marginRight: "10px" }}></i>
                      {item.label}
                    </selectedStyle.DashboardNavLink>
                  </selectedStyle.DashboardNavItem>
                ))}
              </ul>
            </selectedStyle.DashboardSidebar>

            {/* Main Content */}
            <selectedStyle.DashboardContent
              className="col-lg-9 col-md-8"
              style={{
                padding: "20px",
                backgroundColor: "#ffffff", // White background for clarity
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // Stronger shadow for focus
              }}
            >
              {activeTab === 'dashboard' && (
                <selectedStyle.DashboardTabPane>
                  <selectedStyle.DashboardCard
                    style={{
                      border: "1px solid #dee2e6",
                      borderRadius: "12px",
                      overflow: "hidden",
                    }}
                  >
                    <selectedStyle.DashboardCardHeader
                      style={{
                        backgroundColor: "#007bff",
                        color: "#fff",
                        padding: "15px",
                      }}
                    >
                      <h3>Welcome to Your Dashboard</h3>
                    </selectedStyle.DashboardCardHeader>
                    <selectedStyle.DashboardCardBody style={{ padding: "20px" }}>
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
