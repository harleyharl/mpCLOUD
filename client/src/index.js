import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root'
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer, compose(applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
))

ReactDOM.render(<Root store={store} />, document.getElementById('root'))

serviceWorker.unregister();
