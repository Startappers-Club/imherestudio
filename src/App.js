import { useEffect } from 'react';

import WebFont from 'webfontloader';

import { Routes, Route } from "react-router-dom";

// styles

import './App.css';
import MainPage from './MainPage';


function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Roboto']
      }
    });
  }, []);


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;


