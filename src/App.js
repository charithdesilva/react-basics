import React from 'react';
import './App.css';
import './Counter';
import Counter from './Counter';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';

const App = () => {
  return (
    <div className='App'>
      <div>Hellooo</div>
      {console.log('App')}
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/Counter' component={Counter} />
        <Route exact path='/Profile' component={Profile} />
        <Route exact path='/Profile/:name' component={Profile} />
      </Switch>
    </div>
  );
};

export default App;
