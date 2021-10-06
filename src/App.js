import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Single from './pages/Single';
import Create from './pages/Create';
import Dashboard from './pages/Dashboard';
import Login from './pages/cred/login';
import Signup from './pages/cred/signup';

function App() {
  return (
    <div className="App">
      <Route path='/' exact render={() => <Home />} />
      <Route path='/about' exact render={() => <About />} />
      <Route path='/contact' exact render={() => <Contact />} />
      <Route path='/single' exact render={() => <Single />} />
      <Route path='/create' exact render={() => <Create />} />
      <Route path='/dashboard' exact render={() => <Dashboard />} />
      <Route path='/login' render={() => <Login />} />
      <Route path='/signup' render={() => <Signup />} />
    </div>
  );
}

export default App;
