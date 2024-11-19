// src/Routes/PublicRoute.js

import React from 'react';
import Layout from '../components/Public/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Public/Home/Home';
import Cart from '../components/Public/Cart/Total/CartView';
import DetailsProducts from '../components/Public/Home/Components/Products/DetailsProducts';
import Confirmation from '../components/Public/Cart/Confirmation';
import Login from '../components/Public/Login/LoginView';
import Register from '../components/Public/register/registerView';
import Product_categories from '../components/Public/Home/Components/Products/Product_categories';
import CheckoutPage from '../components/Public/Cart/Total/CheckoutPage'

export default function PublicRoute() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/DetailsProducts" element={<DetailsProducts />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/Product" element={<Product_categories/>} />
        <Route path="/CheckoutPage" element={<CheckoutPage/>} />
      </Route>
    </Routes>
  );
}
