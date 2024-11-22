import React, { useState } from 'react';
import OrderList from '../OrderList';
import AddressList from '../AddressList';
import AccountDetails from '../AccountDetails';
import CarrierList from '../CarrierList';
import { useDependencies } from '../../../../DependencyContext';
import { styles } from '../../../../theme/AllStyles';
import { useAdminContext } from '../../../../theme/AdminContext';

const AccountDashboardCardTypeA = () => {
  const { orderListViewModel, addressListViewModel, carrierListViewModel } = useDependencies();
  const [activeTab, setActiveTab] = useState('dashboard');
  const { styleChoice } = useAdminContext();
  const selectedStyle = styles[styleChoice];

  return (
    <selectedStyle.DashboardWrapper>
      <div className="section">
        <div className="container">
          <div className="row">
            <selectedStyle.DashboardSidebar className="col-lg-2 col-md-4">
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
                    >
                      <i className={item.icon}></i>
                      {item.label}
                    </selectedStyle.DashboardNavLink>
                  </selectedStyle.DashboardNavItem>
                ))}
              </ul>
            </selectedStyle.DashboardSidebar>

            <selectedStyle.DashboardContent className="col-lg-9 col-md-8">
              {activeTab === 'dashboard' && (
                <selectedStyle.DashboardTabPane>
                  <selectedStyle.DashboardCard>
                    <selectedStyle.DashboardCardHeader>
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
              {activeTab === 'orders' && <OrderList viewModel={orderListViewModel} />}
              {activeTab === 'address' && <AddressList viewModel={addressListViewModel} />}
              {activeTab === 'carriers' && <CarrierList viewModel={carrierListViewModel} />}
              {activeTab === 'accountDetails' && <AccountDetails />}
            </selectedStyle.DashboardContent>
          </div>
        </div>
      </div>
    </selectedStyle.DashboardWrapper>
  );
};

export default AccountDashboardCardTypeA;
