import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LastYearPage from './pages/LastYearPage';
import NextYearPage from './pages/NextYearPage';
import ShareYourYearPage from './pages/ShareYourYearPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/last-year" element={<LastYearPage />} />
      <Route path="/next-year" element={<NextYearPage />} />
      <Route path="/share-your-year" element={<ShareYourYearPage />} />
    </Routes>
  );
}

export default App;
