import React, { Component } from 'react';
import { Card, CardHeader } from 'material-ui';

export class AppItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: props.name,
            localVersion: props.localVersion,
            remoteVersion: props.remoteVersion
        }
    }

    render() {
        return (
            <Card>
                <CardHeader
                    title={this.state.name}
                    subtitle={this.state.localVersion}
                />
            </Card>
        )
    }

}