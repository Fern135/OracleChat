import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Global.scss';

import Home from './components/home/component/Home';
import About from './components/about/component/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"       element={ <Home />} />
        <Route path='/about'  element={ <About /> } />
        {/* <Route path='/contact' element={  } /> */}
      </Routes>
    </Router>
  );
}

export default App;
