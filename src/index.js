import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Com from './pages/com/com';
import './index.less';

const container = document.createElement('h1');
document.body.appendChild(container);

ReactDOM.render(
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/news' component={Com} />
  </Switch>,
  container
);