import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import { AdminPanel } from './components/AdminPanel';
import { AppList } from './components/AppList';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Grid container>
            <Grid item md={2}>
              <div class="SideMenu">
                <Link to="/apps"><Button>Apps</Button></Link>
                <Link to="/admin"><Button>Admin</Button></Link>
              </div>
            </Grid>

            <Grid item md={10}>
              <div class="MainPage" md={12}>
                <Switch>
                  <Route path="/apps" component={AppList}/>
                  <Route path="/admin" component={AdminPanel}/>
                </Switch>
              </div>
            </Grid>
          </Grid>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
