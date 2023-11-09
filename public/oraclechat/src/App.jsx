import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Global.scss';

import Home from './components/home/component/Home';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path='/about' element={  } /> */}
          {/* <Route path='/contact' element={  } /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
