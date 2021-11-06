import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Redirect } from 'react-router';
import Overview from './pages/Overview';
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './pages/Reports';
import PickFood from './pages/Menu';
import React from 'react';
function App() {
  return (
    <Router>
      <Sidebar />
      <Router>
        <Route path='/overview' exact component={Overview} />
        <Route path='/reports' exact component={Reports} />
        <Route path='/reports/reports1' exact component={ReportsOne} />
        <Route path='/reports/reports2' exact component={ReportsTwo} />
        <Route path='/reports/reports3' exact component={ReportsThree} />
        <Route path='/menu' exact component={PickFood} />
        
        <Redirect to='/menu' />
      </Router>
    </Router>
  );
}

export default App;
