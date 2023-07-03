import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AddAccountForm from './components/AddAccountForm';
import './App.css';

function App() {
  return (
    <div className="app">

      <BrowserRouter>
        <Routes>


          <Route  path="/" element={<Home/>} />
          {/* <Route path="/AddAccountForm" element={<AddAccountForm/>} /> */}


        </Routes>



      </BrowserRouter>

    </div>
  );
}

export default App;
