import React, { Component } from 'react';
import { AppItem } from './AppItem';
import { Settings } from '../services/Settings';

export class AppList extends Component {

    settings = new Settings();

    constructor(props) {
        super(props);

        this.state = {
            apps: []
        }
        this.loadAppList();
    }

    loadAppList() {
        this.settings.getLocalAppList()
            .then(appList => {
                this.setState({
                    apps: appList
                })
            })
    }

    render() {
        return (
            <div>
                {this.state.apps.map( app => (
                    <div key={app.name}>
                        <AppItem name={app.name} localVersion={app.localVersion} remoteVersion={app.remoteVersion}/>
                    </div>))}
            </div>
        )
    }

}