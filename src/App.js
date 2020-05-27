import React from 'react';
import './App.css';
import Home from './components/home';
import India from './components/india';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import { Info } from './components/info';

function App() {
  return (
    <div className="conatiner-fluid app-db-out-con">
      <Router>
        <Switch>
          <Route path="/" exact component={India}/>
          <Route path="/global" exact component={Home}/>
          <Route path="/info" exact component={Info}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
