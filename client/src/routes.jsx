import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import './global';

import App from './pages/App';

const configRoutes = [{
    path: '/',
    exact: true,
    main: App
  }];

const Routes = () => (
  <BrowserRouter>
    <Switch>
      {
        configRoutes.map((route, index) => {
          return <Route key={index} exact={route.exact} path={route.path} component={route.main}/>
        })
      }
    </Switch>
  </BrowserRouter>
)

Routes.propTypes = {
  text: PropTypes.any
};

export default Routes;