import React from 'react';
import logo from './Images/logo.jpg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import VisionValue from "./pages/VisionValue";
import LifeCoaching from "./pages/LifeCoaching";
import Pricing from "./pages/Pricing";
import ContactRob from "./pages/ContactRob";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/vision-value'} element={<VisionValue />} />
        <Route path={'/about-life-coaching'} element={<LifeCoaching />} />
        <Route path={'/pricing'} element={<Pricing />} />
        <Route path={'/contact'} element={<ContactRob />} />

        <Route path={'*'} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
