import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './Landing/landing';
import About from './About/About';
import Portfolio from './Portfolio/Portfolio';
import Resume from './Resume/Resume';
import Contact from './Contact/Contact';
import FAQ from './FAQ/FAQ';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/about' component={About} />
        <Route path='/landing' component={Landing} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/resume' component={Resume} />
        <Route path='/contact' component={Contact} />
        <Route path='/faq' component={FAQ} />
        <Route path='*' component={Landing} />
      </Switch>
    </Router>
  );
}

export default App;
