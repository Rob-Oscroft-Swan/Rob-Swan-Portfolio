import React from 'react';
import logo from './Images/logo.jpg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import VisionValue from "./pages/VisionValue";
import LifeCoaching from "./pages/LifeCoaching";
import Pricing from "./pages/Pricing";
import ContactRob from "./pages/ContactRob";
import NotFound from "./pages/NotFound";

function App() {
  return (
      React.createElement(BrowserRouter, null,
          React.createElement(Routes, null,
              React.createElement(Route, { path: '/', element: React.createElement(HomePage, null) }),
              React.createElement(Route, { path: '/vision-value', element: React.createElement(VisionValue, null) }),
              React.createElement(Route, { path: '/about-life-coaching', element: React.createElement(LifeCoaching, null) }),
              React.createElement(Route, { path: '/pricing', element: React.createElement(Pricing, null) }),
              React.createElement(Route, { path: '/contact', element: React.createElement(ContactRob, null) }),
              React.createElement(Route, { path: '*', element: React.createElement(NotFound, null) })
          )
      )
  );
}

export default App;
