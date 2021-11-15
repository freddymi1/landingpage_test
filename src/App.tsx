import React from 'react';
import './App.scss';
import './designs/Home.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage';

function App() {
  return (
    <BrowserRouter>
        <MainPage/>
    </BrowserRouter>
  );
}

export default App;
