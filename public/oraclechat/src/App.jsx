// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './Global.scss';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          {/* <Route path="/" exact   omponent={ } /> */}
          {/* <Route path="/about"    component={About} /> */}
          {/* <Route path="/contact"  component={Contact} /> */}
        </Switch>
      </div>
    </Router>
  );
}


export default App;
