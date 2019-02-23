import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import News from './News';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Switch>
          <Route exact path='/news' component={News} />
        </Switch>
      </div>
    );
  }
}

export default App;
