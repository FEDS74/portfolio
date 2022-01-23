import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Home} from './pages/Home';
import {NavBar} from './components/NavBar';




class App extends Component {
  render() {
    return(
      <>
      <NavBar />
        
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="#about" component={Home} />          
          <Route exact path="#work" component={Home} />
          <Route exact path="#test" component={Home} />
        </Switch>
      </Router>
      </>
    )
  }
}

export default App;