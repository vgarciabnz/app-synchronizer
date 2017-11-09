import React, { Component } from 'react';
import Card from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import AppUploader from './AppUploader';

const styles = {
    card: {
        minWidth: 275,
        margin: 15,
        padding: 10
    },
    actions: {
        padding: 10
    }
};


export class AppItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: props.app.name,
            localVersion: props.app.localVersion,
            remoteVersion: props.app.remoteVersion,
            repoUrl: props.app.repoUrl,
            isUpdated: props.app.localVersion === props.app.remoteVersion
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
                        {this.state.isUpdated ? (
                            <div>Up-to-date</div>
                        ) : (
                            <div>
                                <a href={this.state.repoUrl} target="_blank"> 
                                    <Button to={this.state.repoUrl} raised color="accent">Download</Button>
                                </a>
                                <AppUploader className={this.props.classes.actions}/>
                            </div>
                        )}
                    </Grid>
                </Grid>
            </Card>
        )
    }

}

export default withStyles(styles)(AppItem);