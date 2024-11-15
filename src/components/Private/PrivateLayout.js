import React from 'react';
import { Outlet } from 'react-router-dom';
import ContainerNavBar from '../../theme/ThemeContainer/ContainerTypeNavBar';
import Footer from '../Public/Footer/Footer'
export default function PrivateLayout() {
  return (
    <div>
      <ContainerNavBar />
      <Outlet />
      <Footer />
    </div>
  );
}