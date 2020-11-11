import React from 'react';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import './App.css';

import { ExperiencePage } from "./pages/ExperiencePage/ExperiencePage.js";
import { PublicationPage } from "./pages/PublicationPage/PublicationPage.js";
import { TimelinePage } from "./pages/TimelinePage/TimelinePage";
import { AboutPage } from "./pages/AboutPage/AboutPage";

function App() {

  return (
    <Router>
      <div className="AppRoot">
          <Switch>
            <Route exact path="/" component={TimelinePage} />
            <Route path="/experience/" component={ExperiencePage} />
            <Route path="/publication/" component={PublicationPage} />
            <Route path="/about/" component={AboutPage} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
