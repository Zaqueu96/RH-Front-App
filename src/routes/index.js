import React, { Fragment } from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import LoginPage from '../pages/LoginPage'
import DashboardPage from '../pages/DashboardPage'
export default function Routes() {
    
    return (
      <Switch>
        <Route exact path="/" component={DashboardPage} />
        <Route path="/dashboard" component={Fragment} />
      </Switch>
    );
  }