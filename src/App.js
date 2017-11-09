import React, { Component } from 'react';
import './App.css';
import { AdminPanel } from './components/AdminPanel';
import { AppList } from './components/AppList';
import { Settings } from './services/Settings';

class App extends Component {

  render() {
    return (
      <div className="App">
        <AdminPanel/>
        <AppList/>
      </div>
    );
  }
}

export default App;
