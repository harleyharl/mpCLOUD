import React from 'react';
import { Switch, Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './App'

import SoundkitIndex from './components/Soundkit/Index';
import SoundkitNew from './components/Soundkit/New';
import SoundkitEdit from './components/Soundkit/Edit';
import NotFound from './components/Soundkit/NotFound';

const history = createBrowserHistory();

const Routes = () =>
  <Router history={history}>
    <Switch>
      <Route path="/soundkit/:id/edit" component={SoundkitEdit} />
      <Route path="/soundkits/new" component={SoundkitNew} />
      <Route path="/soundkits/" component={App} />
      <Route path="/" component={App}/>
    </Switch>
  </Router>;

export default Routes;
