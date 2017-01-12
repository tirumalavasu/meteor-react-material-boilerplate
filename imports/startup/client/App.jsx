import React, { Component } from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Router, Route, Link, browserHistory } from 'react-router';

import routes from './routes';

import MainLayout from '../../ui/layouts/MainLayout.jsx';

export default class App extends Component {

}

const rootRoute = {
  component: MainLayout,
  childRoutes: routes,
};

Meteor.startup(() => {
  render(
    <Router history={browserHistory} routes={rootRoute} />,
    document.getElementById('render-target')
  );
});
