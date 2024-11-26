import React, { useState } from 'react';
import ContainerTypeAdressListCard from '../../../../theme/ThemeContainer/ContainerTypeAdressListCard'; 
import AccountDetails from '../AccountDetails';
import ContainerTypeCarrierListCard from '../../../../theme/ThemeContainer/ContainerTypeCarrierListCard';
import { useDependencies } from '../../../../DependencyContext';
import { styles } from '../../../../theme/AllStyles';
import { useAdminContext } from '../../../../theme/AdminContext';
import ContainerTypeOrderListCard from '../../../../theme/ThemeContainer/ContainerTypeOrderListCard';

const AccountDashboardCardTypeF = () => {
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
  ];

  return (
    <selectedStyle.DashboardWrapper>
      <div style={{ display: "flex", height: "100vh" }}>
        {/* Sidebar */}
        <selectedStyle.DashboardSidebar
          style={{
            width: "250px",
            backgroundColor: "#343a40",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            padding: "20px",
            boxShadow: "2px 0 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h3 style={{ marginBottom: "20px", fontWeight: "bold", fontSize: "18px" }}>
            Account Menu
          </h3>
          <ul style={{ listStyle: "none", padding: "0" }}>
            {tabs.map((item, index) => (
              <selectedStyle.DashboardNavItem
                key={index}
                onClick={() => setActiveTab(item.tab)}
                style={{
                  padding: "10px 15px",
                  cursor: "pointer",
                  borderRadius: "8px",
                  backgroundColor: activeTab === item.tab ? "#007bff" : "transparent",
                  color: activeTab === item.tab ? "#fff" : "#adb5bd",
                  fontWeight: activeTab === item.tab ? "bold" : "normal",
                  transition: "background-color 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <i className={item.icon}></i>
                {item.label}
              </selectedStyle.DashboardNavItem>
            ))}
          </ul>
        </selectedStyle.DashboardSidebar>

        {/* Main Content */}
        <div
          style={{
            flex: 1,
            backgroundColor: "#f8f9fa",
            padding: "30px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {/* Header Section */}
          <div
            style={{
              backgroundColor: "#ffffff",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h3>{tabs.find((tab) => tab.tab === activeTab)?.label}</h3>
          </div>

          {/* Content Section */}
          <div
            style={{
              flex: 1,
              backgroundColor: "#ffffff",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              overflowY: "auto",
            }}
          >
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
          </div>
        </div>
      </div>
    </selectedStyle.DashboardWrapper>
  );
};

export default AccountDashboardCardTypeF;
