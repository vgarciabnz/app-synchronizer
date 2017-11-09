import React, { Component } from 'react';
import { getInstance } from 'd2/lib/d2';

class AppUploader extends Component {

    async uploadApp(e) {
        const file = e.target.files[0];
        let d2 = await getInstance();
        
        d2.system.uploadApp(file)
            .then(success => {
                console.log("App updated");
                return d2.system.reloadApps();
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <input type="file" onChange={this.uploadApp} />
        )
    }
}

export default AppUploader;