import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux'
import App from '../App'
import SoundkitIndex from './Soundkit/Index';
import SoundkitNew from './Soundkit/New';
import SoundkitEdit from './Soundkit/Edit';
import NotFound from './Soundkit/NotFound';

const history = createBrowserHistory();

const Root = ({ store }) =>
<Provider store={store}>
  <Router history={history}>
    <Route path="/soundkit/:id/edit" component={SoundkitEdit} />
    <Route path="/new" component={SoundkitNew} />
    <Route path="/soundkits" component={SoundkitIndex} />
    <Route path="/play" component={App}/>
  </Router>
</Provider>

export default Root;
