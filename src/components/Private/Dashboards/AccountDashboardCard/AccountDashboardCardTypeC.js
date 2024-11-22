import React, { useState } from 'react';
import OrderList from '../OrderList';
import AddressList from '../AddressList';
import AccountDetails from '../AccountDetails';
import CarrierList from '../CarrierList';
import { useDependencies } from '../../../../DependencyContext';
import { styles } from '../../../../theme/AllStyles';
import { useAdminContext } from '../../../../theme/AdminContext';

const AccountDashboardCardTypeC = () => {
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
      <div className="section">
        <div className="container">
          <div
            className="row justify-content-center"
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
                  backgroundColor: activeTab === item.tab ? "#007bff" : "#ffffff",
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
                <i className={item.icon} style={{ fontSize: "24px", marginBottom: "10px" }}></i>
                <p style={{ margin: "0", fontWeight: "bold" }}>{item.label}</p>
              </div>
            ))}
          </div>

          <div
            className="row"
            style={{
              padding: "20px",
              backgroundColor: "#ffffff",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            }}
          >
            {activeTab === 'dashboard' && (
              <selectedStyle.DashboardTabPane>
                <selectedStyle.DashboardCard>
                  <selectedStyle.DashboardCardHeader
                    style={{
                      backgroundColor: "#007bff",
                      color: "#ffffff",
                      padding: "15px",
                      borderRadius: "12px 12px 0 0",
                    }}
                  >
                    <h3>Welcome Back!</h3>
                  </selectedStyle.DashboardCardHeader>
                  <selectedStyle.DashboardCardBody style={{ padding: "20px" }}>
                    <p>
                      Use this dashboard to view your orders, manage addresses, carriers, and update your account details.
                    </p>
                  </selectedStyle.DashboardCardBody>
                </selectedStyle.DashboardCard>
              </selectedStyle.DashboardTabPane>
            )}
            {activeTab === 'orders' && <OrderList viewModel={orderListViewModel} />}
            {activeTab === 'address' && <AddressList viewModel={addressListViewModel} />}
            {activeTab === 'carriers' && <CarrierList viewModel={carrierListViewModel} />}
            {activeTab === 'accountDetails' && <AccountDetails />}
          </div>
        </div>
      </div>
    </selectedStyle.DashboardWrapper>
  );
};

export default AccountDashboardCardTypeC;
