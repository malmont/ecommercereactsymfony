import React, { useState } from 'react';
import ContainerTypeAdressListCard from '../../../../theme/ThemeContainer/ContainerTypeAdressListCard'; 
import AccountDetails from '../AccountDetails';
import ContainerTypeCarrierListCard from '../../../../theme/ThemeContainer/ContainerTypeCarrierListCard';
import { useDependencies } from '../../../../DependencyContext';
import { styles } from '../../../../theme/AllStyles';
import { useAdminContext } from '../../../../theme/AdminContext';
import ContainerTypeOrderListCard from '../../../../theme/ThemeContainer/ContainerTypeOrderListCard';

const AccountDashboardCardTypeD = () => {
  const { orderListViewModel, addressListViewModel, carrierListViewModel } = useDependencies();
  const [activeTab, setActiveTab] = useState('dashboard');
  const { styleChoice } = useAdminContext();
  const selectedStyle = styles[styleChoice];

  return (
    <selectedStyle.DashboardWrapper>
      <div className="section" style={{ display: 'flex', height: '100vh' }}>
        {/* Sidebar */}
        <selectedStyle.DashboardSidebar
          className="col-lg-2 col-md-4"
          style={{
            backgroundColor: "#343a40",
            color: "#fff",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
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
                    color: activeTab === item.tab ? "#007bff" : "#adb5bd",
                    fontWeight: activeTab === item.tab ? "bold" : "normal",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "10px",
                    borderRadius: "8px",
                    backgroundColor: activeTab === item.tab ? "#e9ecef" : "transparent",
                    transition: "all 0.3s",
                  }}
                >
                  <i className={item.icon}></i>
                  {item.label}
                </selectedStyle.DashboardNavLink>
              </selectedStyle.DashboardNavItem>
            ))}
          </ul>
        </selectedStyle.DashboardSidebar>

        {/* Main Content */}
        <selectedStyle.DashboardContent className="col-lg-9 col-md-8" style={{ padding: "30px" }}>
          {activeTab === 'dashboard' && (
            <selectedStyle.DashboardTabPane>
              <selectedStyle.DashboardCard
                style={{
                  border: "1px solid #dee2e6",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  padding: "20px",
                }}
              >
                <selectedStyle.DashboardCardHeader style={{ marginBottom: "15px" }}>
                  <h3>HELLO</h3>
                </selectedStyle.DashboardCardHeader>
                <selectedStyle.DashboardCardBody>
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
      </div>
    </selectedStyle.DashboardWrapper>
  );
};

export default AccountDashboardCardTypeD;
