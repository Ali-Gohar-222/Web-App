import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import MachineryRental from './components/MachineryRental.jsx';
import FarmerRegistration from './components/FarmerRegistration.jsx';
import SubmissionSuccess from './components/SubmissionSuccess.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter initialEntries={['/machinery-rental']}>
    <Routes>
      <Route path="/" element={<Navigate to="/machinery-rental" />} />
      <Route path="/machinery-rental" element={<MachineryRental />} />
      <Route path="/farmer-registration" element={<FarmerRegistration />} />
      <Route path="/submission-success" element={<SubmissionSuccess />} />
    </Routes>
  </BrowserRouter>
);