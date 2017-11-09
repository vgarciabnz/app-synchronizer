import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import { AdminPanel } from './components/AdminPanel';
import AppList from './components/AppList';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';

const styles = {
  button: {
    width: "100%"
  },
  sideMenu: {
    "background-color": "rgb(243, 243, 243)"
  },
  mainPage: {
    margin: 15,
    width: "70%"
  }
}

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className={this.props.classes.sideMenu}>
          <Grid container>
            <Grid item md={2}>
              <div>
                <Link to="/apps"><Button className={this.props.classes.button}>Apps</Button></Link>
                <Link to="/admin"><Button className={this.props.classes.button}>Admin</Button></Link>
              </div>
            </Grid>

            <Grid item md={10}>
              <div className={this.props.classes.mainPage} md={12}>
                <Switch>
                  <Route path="/admin" component={AdminPanel}/>
                  <Route path="/" component={AppList}/>
                </Switch>
              </div>
            </Grid>
          </Grid>
        </div>
      </BrowserRouter>
    );
  }
}

export default withStyles(styles)(App);
