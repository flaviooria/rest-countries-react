import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './app.scss';
import Country from './pages/Country';
import Home from './pages/Home';
import Navbar from './components/navbar/Navbar';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/country/:name" element={<Country />}></Route>
      </Routes>
    </>
  );
}
