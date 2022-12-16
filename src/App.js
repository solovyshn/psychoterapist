import logo from './logo.svg';
import React from 'react';
import './App.css';

import {Navigation} from './components/Navigation';
import {Meetings} from './components/Meetings';
import {Therapists} from './components/Therapists';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <h3 className="m-3 d-flex justify-content-center">
          Psychiatric Hospital
        </h3>
        <Navigation/>

        <Routes>
          <Route path='/' element={<Therapists />} exact/>
          <Route path='/meetings' element={<Meetings />}/>

        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
