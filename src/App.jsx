import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage'

const App = () => {
  return (
    <Routes>
      <Route path='/portfolio/' element={<HomePage />} />
    </Routes>
  );
}

export default App;
