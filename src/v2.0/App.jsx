import React from 'react';
import './index.css';
import { Navbar } from './components/navbar/Navbar';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';


export default function App() {
  return (
    <>
      <section className="font-nunito">
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </section>
    </>
  );
}
