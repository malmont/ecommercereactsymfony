import './App.css';
import PublicRoute from '../src/Routes/PublicRoute';
import PrivateRoute from '../src/Routes/PrivateRoute';
import { AuthProvider } from '../src/Contexts/authContext';
import AuthContext from '../src/Contexts/authContext';
import DashboardView from '../src/components/Private/Dashboards/AccountDashboard';
import ProfileView from '../src/components/Private/Profile/ProfileView';
import { Routes, Route } from 'react-router-dom';
import Confirmation from './components/Public/Cart/Confirmation';
import { DependencyProvider } from './DependencyContext';
import { useContext } from 'react';
import Order from './components/Private/Dashboards/Order';
import CheckoutPage from '../src/components/Public/Cart/Total/CheckoutPage';
import { AdminProvider, useAdminContext  } from '../src/theme/AdminContext'; 
import { ThemeProvider } from 'styled-components';  
import AdminComponentSettings from '../src/theme/Setting/AdminComponentSettings'; 
import styled from 'styled-components';
import { themes } from './theme/All_themes'; 


function App() {
  return (
    <AuthProvider>
      <AdminProvider> 
        <AppRoutes />
      </AdminProvider>
    </AuthProvider>
  );
}

const AppRoutes = () => {
  const { user, loading } = useContext(AuthContext);
  const { themeChoice, showAdminSettings,loadingSettings } = useAdminContext(); 

  if (loading || loadingSettings) {
    return <div>Loading...</div>;
  }


  const theme = themes[themeChoice] || themes.light;

  return (
    <DependencyProvider user={user}>
      <ThemeProvider theme={theme}>
        <AppLayout>
          <Sidebar show={showAdminSettings}>
            <AdminComponentSettings /> 
          </Sidebar>
          <MainContent>
            <Routes>
              <Route path="/*" element={<PublicRoute />} />
              <Route element={<PrivateRoute />}>
                <Route path="/dashboard" element={<DashboardView />} />
                <Route path="/profile" element={<ProfileView />} />
                <Route path="/confirmation" element={<Confirmation />} /> 
                <Route path="/order/:orderId" element={<Order />} /> 
                <Route path="/CheckoutPage" element={<CheckoutPage />} />
              </Route>
            </Routes>
          </MainContent>
        </AppLayout>
      </ThemeProvider>
    </DependencyProvider>
  );
}

export default App;

const AppLayout = styled.div`
  display: flex;
  min-height: 100vh; 
  flex-direction: row;
`;
const Sidebar = styled.div`
  width: 300px;
  background-color: #f4f4f4;
  padding: 20px;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1); /* Ombre à gauche */
  overflow-y: auto;
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  display: ${({ show }) => (show ? 'block' : 'none')};
  z-index: 1000; /* Assurez-vous qu'il soit au-dessus du contenu principal */

  @media (max-width: 768px) {
    display: none; /* Masquer en mode mobile et tablette */
  }
`;

const MainContent = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #fff;
  overflow-y: auto;
  margin-right: ${({ showSidebar }) => (showSidebar ? '250px' : '0')}; /* Compense la largeur de Sidebar */
  transition: margin-right 0.3s ease;
`;
