import React, { Component } from 'react';
import Card from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import AppItemActions from './AppItemActions';

const styles = {
    card: {
        minWidth: 275,
        margin: 15,
        padding: 10
    },
    actions: {
        padding: 10
    },
    button: {
        "text-decoration": "none"
    }
};


export class AppItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: props.app.name,
            key: props.app.key,
            localVersion: props.app.localVersion,
            remoteVersion: props.app.remoteVersion,
            repoUrl: props.app.repoUrl,
            appStatus: props.app.localVersion === props.app.remoteVersion ? "UP-TO-DATE" :
                props.app.remoteVersion === undefined ? "DEPRECATED" : "OUTDATED"
        }
    }

    download(url) {
        return window.open(url);
    }

    render() {
        return (
            <Card className={this.props.classes.card}>
                <Grid container>
                    <Grid item md={8}>
                        <Typography type="headline" component="h2">
                            {this.state.name}
                        </Typography>
                        <Typography component="p">
                            Local Version: {this.state.localVersion}
                        </Typography>
                        <Typography component="p">
                            Remote Version: {this.state.remoteVersion}
                        </Typography>
                    </Grid>
                    <Grid item md={4}>
                        <AppItemActions app={this.state}></AppItemActions>
                    </Grid>
                </Grid>
            </Card>
        )
    }

}

export default withStyles(styles)(AppItem);