import React, { Component } from 'react';
import { AppItem } from './AppItem';
import { Settings } from '../services/Settings';
import { Paper } from 'material-ui';

export class AppList extends Component {

    settings = new Settings();

    constructor(props) {
        super(props);

        this.state = {
            apps: []
        }
        this.loadAppList();
    }

    async loadAppList() {
        const localAppList = await this.settings.getLocalAppList();
        const remoteAppList = await this.settings.getRemoteAppList();

        let appList = localAppList.map(app => ({
            key: app.key,
            name: app.name,
            localVerson: app.version,
            remoteVersion: undefined
        }))

        remoteAppList.forEach(remoteApp => {
            const localAppIndex = appList.findIndex(localApp => remoteApp.key === localApp.key);
            if (localAppIndex > -1) {
                appList[localAppIndex].remoteVersion = remoteApp.version;
            } else {
                appList.push({
                    key: remoteApp.key,
                    name: remoteApp.name,
                    localVerson: undefined,
                    remoteVersion: remoteApp.version
                })
            }
        });

        this.setState({
            apps: appList
        });
    }

    render() {
        return (
            <Paper zDepth={2}>
                <div>
                    {this.state.apps.map( app => (
                        <div key={app.name}>
                            <AppItem app={app}/>
                        </div>
                    ))}
                </div>
            </Paper>
        )
    }

}