import React, { Component } from 'react';
import { TextField } from 'material-ui';
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
                resourcesUrl: settings.remoteUrl
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
            <div>
                <TextField
                    label="Remote Instance Url"
                    value={this.state.remoteUrl}
                    onChange={this.handleRemoteUrlChange}
                /><br />
                <br />
                <TextField
                    label="Username"
                    value={this.state.remoteUsername}
                    onChange={this.handleRemoteUsernameChange}
                /><br />
                <TextField
                    label="Password"
                    type="password"
                    value={this.state.remotePassword}
                    onChange={this.handleRemotePasswordChange}
                /><br />
                <br />
                <TextField
                    label="Resources Url"
                />
            </div>
        )
    }

}