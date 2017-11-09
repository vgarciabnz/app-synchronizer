import React, { Component } from 'react';
import { TextField } from 'material-ui';
import Grid from 'material-ui/Grid';
import { Settings } from '../services/Settings';

export class AdminPanel extends Component {

    settings = new Settings();

    constructor(props) {
        super(props);
        this.state = {
            remoteUrl: "",
            remoteUsername: "",
            remotePassword: "",
            resourcesUrl: ""
        }

        this.handleRemoteUsernameChange = this.handleRemoteUsernameChange.bind(this);
        this.handleRemotePasswordChange = this.handleRemotePasswordChange.bind(this);

        this.loadSettings();
    }

    loadSettings() {
        this.settings.getSettings()
            .then(settings => this.setState({
                remoteUrl: settings.remoteUrl,
                remoteUsername: settings.remoteUsername,
                remotePassword: settings.remotePassword,
                repoBaseUrl: settings.repoBaseUrl
            }));
    }

    handleRemoteUsernameChange(evt) {
        const remoteUsername = evt.target.value;
        this.setState({
            remoteUsername: remoteUsername
        })
    }
    handleRemotePasswordChange(evt) {
        const remotePassword = evt.target.value;
        this.setState({
            remotePassword: remotePassword
        })
    }

    render() {
        return (
            <Grid container>
                <Grid item md={8}>
                    <TextField
                        label="Remote Instance Url"
                        value={this.state.remoteUrl}
                        fullWidth="true"
                    /><br />
                    <br />
                    <TextField
                        label="Username"
                        value={this.state.remoteUsername}
                        onChange={this.handleRemoteUsernameChange}
                        fullWidth="true"
                    /><br />
                    <TextField
                        label="Password"
                        type="password"
                        value={this.state.remotePassword}
                        onChange={this.handleRemotePasswordChange}
                        fullWidth="true"
                    /><br />
                    <br />
                    <TextField
                        label="Resources Url"
                        value={this.state.repoBaseUrl}
                        fullWidth="true"
                    />
                </Grid>
            </Grid>
        )
    }

}