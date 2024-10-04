import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import OrderList from './OrderList';
import AddressList from './AddressList';
import AccountDetails from './AccountDetails'; 
import CarrierList from './CarrierList'; 
import styled from 'styled-components';
import { useDependencies } from '../../../DependencyContext'; 

const AccountDashboard = () => {
  const { orderListViewModel, addressListViewModel, carrierListViewModel } = useDependencies(); 
  const [activeTab, setActiveTab] = useState('dashboard');

  useEffect(() => {
    if (!orderListViewModel.user) {

    }
  }, [orderListViewModel.user]);

  return (
    <Wrapper>
      <div className="section">
        <div className="container">
          <div className="row">
            <Sidebar className="col-lg-3 col-md-4">
              <ul className="nav nav-tabs flex-column" role="tablist">
                <NavItem>
                  <StyledNavLink
                    className={`nav-link ${activeTab === 'dashboard' ? 'active' : ''}`}
                    to="#"
                    onClick={() => setActiveTab('dashboard')}
                  >
                    <i className="ti-layout-grid2"></i>Dashboard
                  </StyledNavLink>
                </NavItem>
                <NavItem>
                  <StyledNavLink
                    className={`nav-link ${activeTab === 'orders' ? 'active' : ''}`}
                    to="#"
                    onClick={() => setActiveTab('orders')}
                  >
                    <i className="ti-shopping-cart-full"></i>Orders
                  </StyledNavLink>
                </NavItem>
                <NavItem>
                  <StyledNavLink
                    className={`nav-link ${activeTab === 'address' ? 'active' : ''}`}
                    to="#"
                    onClick={() => setActiveTab('address')}
                  >
                    <i className="ti-location-pin"></i>My Address
                  </StyledNavLink>
                </NavItem>
                <NavItem>
                  <StyledNavLink
                    className={`nav-link ${activeTab === 'carriers' ? 'active' : ''}`}
                    to="#"
                    onClick={() => setActiveTab('carriers')}
                  >
                    <i className="ti-truck"></i>Carriers
                  </StyledNavLink>
                </NavItem>
                <NavItem>
                  <StyledNavLink
                    className={`nav-link ${activeTab === 'accountDetails' ? 'active' : ''}`}
                    to="#"
                    onClick={() => setActiveTab('accountDetails')}
                  >
                    <i className="ti-id-badge"></i>Account details
                  </StyledNavLink>
                </NavItem>
                <NavItem>
                  <StyledNavLink className="nav-link" to="/logout">
                    <i className="ti-lock"></i>Logout
                  </StyledNavLink>
                </NavItem>
              </ul>
            </Sidebar>
            <Content className="col-lg-9 col-md-8">
              {activeTab === 'dashboard' && (
                <TabPane>
                  <Card>
                    <CardHeader>
                      <h3>HELLO</h3>
                    </CardHeader>
                    <CardBody>
                      <p>
                        From your account dashboard, you can easily check & view your recent orders,
                        manage your shipping and billing addresses, and edit your password and account details.
                      </p>
                    </CardBody>
                  </Card>
                </TabPane>
              )}
              {activeTab === 'orders' && <OrderList viewModel={orderListViewModel} />} 
              {activeTab === 'address' && <AddressList viewModel={addressListViewModel} />} 
              {activeTab === 'carriers' && <CarrierList viewModel={carrierListViewModel} />}
              {activeTab === 'accountDetails' && <AccountDetails />} 
            </Content>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #f4f4f4;
  min-height: 66vh;
  padding: 20px;
`;

const Sidebar = styled.div`
  background-color: #ffffff;
  padding: 20px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const NavItem = styled.li`
  margin-bottom: 15px;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 12px 15px;
  font-size: 16px;
  font-weight: 500;
  color: ${props => (props.className.includes('active') ? '#fff' : '#333')} !important;
  background-color: ${props => (props.className.includes('active') ? '#212529' : '#f8f9fa')} !important;
  border-radius: 5px;
  text-decoration: none !important;
  border: 1px solid #ddd !important; /* Ajout d'un contour avec !important */
  transition: background-color 0.3s ease, border-color 0.3s ease; /* Transition fluide */

  &:hover {
    background-color: #212529 !important; /* Couleur de fond au survol */
    color: #fff !important;
    border-color: #212529 !important; /* Changement de la couleur de la bordure */
  }

  i {
    margin-right: 10px;
  }
`;

const Content = styled.div`
  padding: 20px;
`;

const TabPane = styled.div`
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const Card = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
`;

const CardHeader = styled.div`
  padding: 20px;
  border-bottom: 1px solid #f1f1f1;
  background-color: #212529;
  color: #ffffff;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const CardBody = styled.div`
  padding: 20px;
`;

export default AccountDashboard;
