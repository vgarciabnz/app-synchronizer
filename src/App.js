import React, { Component } from 'react';
import './App.css';
import { Settings } from './services/Settings';
import { AppList } from './components/AppList';

class App extends Component {

  settings = new Settings();

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="App">
        <AppList/>
      </div>
    );
  }
}

export default App;
