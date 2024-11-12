import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../theme/ThemeContainer/ContainerNavBar'; 
import Footer from '../Public/Footer/Footer'
export default function PrivateLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}