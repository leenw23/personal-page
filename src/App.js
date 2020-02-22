import React from 'react';
import './App.css';

import { NavBar } from "./components/NavBar/NavBar.js";
import { LandingPage } from "./components/LandingPage/LandingPage.js";
import { VisionPage } from "./components/VisionPage/VisionPage.js";
import { WorkPage } from "./components/WorkPage/WorkPage.js";
import { AboutPage } from "./components/AboutPage/AboutPage.js";


function App() {

  return (
    <div className="AppRoot">
      <NavBar />
      <LandingPage />
      <div style={{backgroundColor: '#FFFFFF', height: '20vh'}}></div>
      <VisionPage />
      <WorkPage />
      <AboutPage />
    </div>
  );
}

export default App;
