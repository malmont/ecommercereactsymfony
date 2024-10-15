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
import { ThemeStyleProvider, ThemeStyleContext } from './theme/ThemeStyleContext'; 
import { ThemeProvider } from 'styled-components';  

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

const AppRoutes = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <DependencyProvider user={user}>
      <ThemeStyleProvider> 
        <ThemeStyleContext.Consumer>
          {({ theme }) => ( 
            <ThemeProvider theme={theme}>
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
            </ThemeProvider>
          )}
        </ThemeStyleContext.Consumer>
      </ThemeStyleProvider>
    </DependencyProvider>
  );
}

export default App;
