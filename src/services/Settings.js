import { getInstance } from 'd2/lib/d2';

export class Settings {

    getRemoteUrl() {
        return getInstance()
            .then(d2 => d2.system.settings.get("keyRemoteInstanceUrl"))
    }

    getLocalAppList() {
        return getInstance()
            .then(d2 => d2.system.installedApps)
    }

}