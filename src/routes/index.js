import React, { Fragment } from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import LoginPage from '../pages/LoginPage'
export default function Routes() {
    
    return (
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/dashboard" component={Fragment} />
        <Route exact path="/protocols/audios" component={Fragment} />
      </Switch>
    );
  }