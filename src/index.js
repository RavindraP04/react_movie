import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
// import * as serviceWorker from './serviceWorker';
// import { register } from 'register-service-worker'
import {applyPolyfills, defineCustomElements} from 'h8k-components/loader';

ReactDOM.render(<App/>, document.getElementById('root'));
// serviceWorker.unregister();

applyPolyfills().then(() => {
     defineCustomElements(window);
});
