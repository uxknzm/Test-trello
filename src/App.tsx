import React from 'react';
import { Routes, Route } from "react-router-dom";
import BoardPages from './pages/BoardPages';
import HomePages from './pages/HomePages';
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePages />} />
      <Route path='/board/:id' element={<BoardPages />} />
    </Routes>
  );
}

export default App;
