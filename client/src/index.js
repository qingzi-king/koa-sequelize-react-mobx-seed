import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import Routes from './routes';
import './assets/css/app.less';

const container = document.getElementById('root');

ReactDOM.render(<LocaleProvider locale={zh_CN}><Routes /></LocaleProvider>, container);

serviceWorker.unregister();
