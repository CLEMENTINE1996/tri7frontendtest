import logo from './logo.svg';
import './App.css';

import { MainRoutes } from './MainRoutes';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';
import { MobileComponents } from './components/MobileComponents';
import React, { useState, useEffect } from 'react';

function App() {

  return (
    <>
    <Header />
    <Navigation />
    <MobileComponents />
    <MainRoutes />
    <Footer />
    </>
  );
}

export default App;
