import React from 'react';
import './App.css';

import { NavBar } from "./components/NavBar/NavBar.js";
import { SideBar } from "./components/SideBar/SideBar.js";
import { TopBar } from "./components/TopBar/TopBar.js";
import { LandingPage } from "./components/LandingPage/LandingPage.js";
import { AboutPage } from "./components/AboutPage/AboutPage.js";
import { TimelinePage } from "./components/TimelinePage/TimelinePage.js";


function App() {

  return (
    <div className="AppRoot">
      <SideBar />
      <TopBar />
      <TimelinePage />
      {/* <NavBar />
      <LandingPage />
      <TimelinePage />
      <AboutPage /> */}
    </div>
  );
}

export default App;
