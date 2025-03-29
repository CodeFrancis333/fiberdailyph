// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import Disclaimer from './Pages/Disclaimer';
import TermsAndConditions from './Pages/TermsAndConditions';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/disclaimer" element={<Disclaimer />} />
      <Route path="/terms" element={<TermsAndConditions />} />
    </Routes>
  );
}

export default App;
