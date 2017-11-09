import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import { AdminPanel } from './components/AdminPanel';
import { AppList } from './components/AppList';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Link to="/apps">Apps</Link>
          <Link to="/admin">Admin</Link>

          <Switch>
            <Route path="/apps" component={AppList}/>
            <Route path="/admin" component={AdminPanel}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
