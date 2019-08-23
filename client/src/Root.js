import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux'
import App from './App'
import SoundkitNew from './components/Soundkit/New';
import SoundkitEdit from './components/Soundkit/Edit';
import NotFound from './components/Soundkit/NotFound';
import About from './components/About'

const history = createBrowserHistory();

const Root = ({ store }) =>
<Provider store={store}>
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/new" component={SoundkitNew} />
      <Route path="/soundkits/:id/edit" component={SoundkitEdit} />
      <Route path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  </Router>
</Provider>

export default Root;
