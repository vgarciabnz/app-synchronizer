import React, { Component } from 'react';
import Button from 'material-ui/Button';
import { getInstance } from 'd2/lib/d2';

class AppItemActions extends Component {

    constructor(props) {
        super(props);
        this.state = {
            app: props.app,
            message: ""
        }
        this.uploadApp = this.uploadApp.bind(this);
        this.deleteApp = this.deleteApp.bind(this);
    }

    async uploadApp(e) {
        const file = e.target.files[0];
        let d2 = await getInstance();
        
        d2.system.uploadApp(file)
            .then(success => {
                console.log("App updated");
                this.setState({ message: "App Updated!"});
                return d2.system.reloadApps();
            })
            .catch(error => {
                console.log(error);
                this.setState({ message: "Some error when updating app"});
            });
    }

    async deleteApp() {
        let d2 = await getInstance();

        console.log("Deleteing " + this.state.app.key);
        d2.system.uninstallApp(this.state.app.key)
            .then(success => {
                console.log("App deleted");
                this.setState({ message: "App Deleted!"});
                return d2.system.reloadApps();
            })
            .catch(error => {
                console.log(error);
                this.setState({ message: "Some error when deleting app"});
            });
    }

    render() {
        switch (this.state.app.appStatus) {
            case "UP-TO-DATE": return <div>Up-to-date</div>
            case "OUTDATED": return (
                <div>
                    <a href={this.state.app.repoUrl} target="_blank">
                        <Button raised color="primary">Download</Button>
                    </a>
                    <br></br>
                    <input type="file" onChange={this.uploadApp} />
                    <div>{this.state.message}</div>
                </div>
            );
            case "DEPRECATED": return (
                <div>
                    <Button raised color="accent" onClick={this.deleteApp}>Delete</Button>
                    <div>{this.state.message}</div>
                </div>
            )
            default: return <div></div>
        }
    }
}

export default AppItemActions;