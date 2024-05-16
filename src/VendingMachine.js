import React from 'react';
import './VendingMachine.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Soda from './Soda';
import Chips from './Chips';
import Sardines from './Sardines';
import SnacksList from './SnacksList';
import Home from './Home';

function VendingMachine() {
  return (
    <div className="VendingMachine">
      <BrowserRouter>
      <h2>Hello I am vending Machine What would you like to have?</h2>
      <SnacksList/>
      
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/Soda' element={<Soda/>} ></Route>
        <Route path='/Chips' element={<Chips/>} ></Route>
        <Route path='/Sardines' element={<Sardines/>} ></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default VendingMachine;

