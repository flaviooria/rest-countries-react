import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/navbar/Navbar';
import './index.css';
import Country from './pages/Country';
import Home from './pages/Home';


export default function App() {
  return (
    <>
      <section className="font-nunito">
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/country/:name' element={<Country />} />
        </Routes>
      </section>
    </>
  );
}
