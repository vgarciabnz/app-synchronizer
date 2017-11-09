import React, { Component } from 'react';
import AppItem from './AppItem';
import { Settings } from '../services/Settings';

class AppList extends Component {

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
        const repoBaseUrl = await this.settings.getRepoBaseUrl();
        let appList = localAppList.map(app => ({
            key: app.key,
            name: app.name,
            repoUrl: undefined,
            localVersion: app.version,
            remoteVersion: undefined
        }))

        remoteAppList.forEach(remoteApp => {
            remoteApp.repoUrl = `${repoBaseUrl}${remoteApp.key}/releases/download/v${remoteApp.version}/${remoteApp.key}.zip`;
            const localAppIndex = appList.findIndex(localApp => remoteApp.key === localApp.key);
            if (localAppIndex > -1) {
                appList[localAppIndex].remoteVersion = remoteApp.version;
                appList[localAppIndex].repoUrl = remoteApp.repoUrl;
            } else {
                appList.push({
                    key: remoteApp.key,
                    name: remoteApp.name,
                    repoUrl: remoteApp.repoUrl,
                    localVersion: undefined,
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
            <div>
                <h2>Installed applications</h2>
                {this.state.apps.map( app => (
                    <div key={app.name}>
                        <AppItem app={app}/>
                    </div>
                ))}
            </div>
        )
    }
}

export default AppList;