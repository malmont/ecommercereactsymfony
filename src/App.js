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
    return <div>Loading...</div>; // Vous pouvez remplacer ceci par un spinner de chargement
  }

  return (
    <DependencyProvider user={user}>
      <Routes>
        <Route path="/*" element={<PublicRoute />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<DashboardView />} />
          <Route path="/profile" element={<ProfileView />} />
          <Route path="/confirmation" element={<Confirmation />} /> 
          <Route path="/order/:orderId" element={<Order />} /> 
        </Route>

      </Routes>
    </DependencyProvider>
  );
}

export default App;
