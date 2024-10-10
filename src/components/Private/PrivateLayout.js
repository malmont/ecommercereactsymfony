import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarLoader from '../Public/Navbar/NavbarLoader';
import Footer from '../Public/Footer/Footer'
export default function PrivateLayout() {
  return (
    <div>
      <NavbarLoader />
      <Outlet />
      <Footer />
    </div>
  );
}