import { getInstance } from 'd2/lib/d2';

export class Settings {

    remoteUrl;
    remoteUser;     //{username: "", password: ""}
    repoBaseUrl;
    namespace = "app-synchronizer";
    remoteUserKey = "remoteUser";
    repoBaseUrlKey = "repoBaseUrl";

    async getSettings() {
        const response = await Promise.all([this.getRemoteUrl(), this.getRemoteUser(), this.getRepoBaseUrl()]);
        const settings = {
            remoteUrl: response[0],
            remoteUsername: response[1].username,
            remotePassword: response[1].password,
            repoBaseUrl: response[2]
        }
        return Promise.resolve(settings);
    }
    
    getRemoteUrl() {
        if (this.remoteUrl !== undefined) {
            return Promise.resolve(this.remoteUrl);
        } else {
            return getInstance()
                .then(d2 => d2.system.settings.get("keyRemoteInstanceUrl"))
                .then(remoteUrl => {
                    this.remoteUrl = remoteUrl;
                    return remoteUrl
                })
        }
    }

    getRemoteUser() {
        if (this.remoteUser !== undefined) {
            return Promise.resolve(this.remoteUrl);
        } else {
            return getInstance()
                .then(d2 => d2.dataStore.get(this.namespace))
                .then(namespace => namespace.get(this.remoteUserKey))
                .then(remoteUser => {
                    this.remoteUser = remoteUser;
                    return remoteUser;
                })
        }
    }

    getRepoBaseUrl() {
        if (this.repoBaseUrl !== undefined) {
            return Promise.resolve(this.repoBaseUrl);
        } else {
            return getInstance()
                .then(d2 => d2.dataStore.get(this.namespace))
                .then(namespace => namespace.get(this.repoBaseUrlKey))
                .then(repoBaseUrl => {
                    this.repoBaseUrl = repoBaseUrl.href;
                    return this.repoBaseUrl;
                })
        }
    }

    getLocalAppList() {
        return getInstance()
            .then(d2 => d2.system.installedApps)
    }

    getRemoteAppList() {
        return Promise.all([this.getRemoteUrl(), this.getRemoteUser()])
            .then(response => {
                return fetch(response[0] + "/api/apps", {
                    headers: {
                        Authorization: "Basic " + btoa(response[1].username + ":" + response[1].password)
                    }
                })
            })
            .then(remoteApps => remoteApps.json())
    }

}