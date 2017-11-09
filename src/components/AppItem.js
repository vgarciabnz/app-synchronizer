import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card, { CardContent, CardActions } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

const styles = {
    card: {
        minWidth: 275,
        maxWidth: 400,
    },
    title: {
        marginBottom: 16,
        fontSize: 14,

    },
 
    pos: {
        marginBottom: 12,

    },
};



export class AppItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: props.app.name,
            localVersion: props.app.localVersion,
            remoteVersion: props.app.remoteVersion,
            repoUrl: props.app.repoUrl
        }
    }
 download(url) {

    return window.open(url);
}
    render() {
        return (

            <Card className={styles.card}>
                <Typography type="headline" component="h2">
                    {this.state.name}
                </Typography>
                <Typography  component="p">
                   Local Version: {this.state.localVersion}
                </Typography>
                <Typography component="p">
                   Remote Version: {this.state.remoteVersion}
                   
                </Typography>

<CardActions>
        <a  href={this.state.repoUrl} target="_blank"> <Button to={this.state.repoUrl} raised color="accent">
            Download 
          </Button></a>
      </CardActions>    
            </Card>

        )
    }

}