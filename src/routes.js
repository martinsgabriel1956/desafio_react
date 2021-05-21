import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { Repositories } from './pages/Repositories';
import { Followers } from './pages/Followers';
import { Followings } from './pages/Followings';

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" component={Home} />
        <Route path="/repositories" component={Repositories} />
        <Route path="/followers" component={Followers} />
        <Route path="/followings" component={Followings} />
      </Switch>
    </BrowserRouter>
  );
}
