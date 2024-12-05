import React, { useState } from 'react';

import ContainerTypeAdressListCard from '../../../../theme/ThemeContainer/ContainerTypeAdressListCard'; 
import AccountDetails from '../AccountDetails';
import ContainerTypeCarrierListCard from '../../../../theme/ThemeContainer/ContainerTypeCarrierListCard';
import { useDependencies } from '../../../../DependencyContext';
import { styles } from '../../../../theme/AllStyles';
import { useAdminContext } from '../../../../theme/AdminContext';
import ContainerTypeOrderListCard from '../../../../theme/ThemeContainer/ContainerTypeOrderListCard';
import { useTheme } from 'styled-components';

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
      <div className="section" style={{ padding: "5px" }}>
        {/* Grille des onglets */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "20px",
            marginBottom: "30px",
          }}
        >
          {tabs.map((item, index) => (
            <div
              key={index}
              onClick={() => setActiveTab(item.tab)}
              style={{
                cursor: "pointer",
                backgroundColor: activeTab === item.tab ? theme.colors.buttonBackground : "transparent",
                color: activeTab === item.tab ? "#ffffff" : "#000000",
                border: "1px solid #dee2e6",
                borderRadius: "12px",
                padding: "20px",
                textAlign: "center",
                boxShadow: activeTab === item.tab
                  ? "0 4px 12px rgba(0, 123, 255, 0.3)"
                  : "0 2px 6px rgba(0, 0, 0, 0.1)",
                transition: "all 0.3s ease",
              }}
            >
              <i className={`${item.icon}`} style={{ fontSize: "24px", marginBottom: "10px" }}></i>
              <p style={{ margin: "0", fontWeight: "bold" }}>{item.label}</p>
            </div>
          ))}
        </div>

        {/* Contenu principal */}
        <div
          style={{
            background: "#ffffff",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          {activeTab === 'dashboard' && (
            <selectedStyle.DashboardTabPane>
              <selectedStyle.DashboardCard>
                <selectedStyle.DashboardCardHeader style={{ marginBottom: "15px" }}>
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
        </div>
      </div>
    </selectedStyle.DashboardWrapper>
  );
};

export default AccountDashboardCardTypeE;
