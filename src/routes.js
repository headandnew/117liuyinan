import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import Test from './containers/Test';
import About from './containers/About';
import TestSlider from './containers/TestSlider';
import TestSwitch from './containers/TestSwitch'
import TestDialog from './containers/TestDialog';
const AppRoutes = () => (
  <Route path="/" component={App}>
    <IndexRoute component={TestDialog} />
    <Route path="about(-:uu)" component={About} />
  </Route>
);

export default AppRoutes;
