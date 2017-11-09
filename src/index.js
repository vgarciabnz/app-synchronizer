import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { init as initD2 } from 'd2/lib/d2';
import { Api } from './services/Api';

const api = new Api();

initD2({
    baseUrl: api.baseUrl + "/api",
    headers: {
        Authorization: "Basic " + btoa(api.username + ":" + api.password)
    }
})

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
