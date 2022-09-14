import { useEffect } from 'react';

import WebFont from 'webfontloader';

import { Routes, Route } from "react-router-dom";

// styles

import './App.css';
import MainPage from './MainPage';
import BasePhotos from './components/BasePhotos';


function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Roboto']
      }
    });
    document.title = "I`M HERE.studio";
  }, []);


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path="/base/:id" element={ <BasePhotos /> } />
      </Routes>
    </div>
  );
}

export default App;


