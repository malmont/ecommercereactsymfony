
import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import AnimateHeight from 'react-animate-height';
import Navbar from '../components/Public/Navbar/NavBar';

// Envelopper Navbar avec observer ici
const ObservedNavbar = observer(Navbar);

export { 
  React, 
  styled, 
  AnimateHeight, 
  ObservedNavbar
};