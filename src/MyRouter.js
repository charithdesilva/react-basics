import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Counter from './Counter';
import Profile from './Profile';

export default class MyRouter extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/Home' component={Home} />
        <Route exact path='/Counter' component={Counter} />
        <Route exact path='/Profile' component={Profile} />
        <Route path='/Profile/:name' component={Profile} />
      </Switch>
    );
  }
}
