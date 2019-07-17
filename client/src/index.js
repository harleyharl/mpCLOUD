import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import Root from './components/Root'
// import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './reducers' //look at reducers, not really doing anything now..
import * as serviceWorker from './serviceWorker';
// figure out how to add redux devtools
// const store = createStore(rootReducer, applyMiddleware(thunk));

const store = createStore(rootReducer, compose(applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
))

ReactDOM.render(<Root store={store} />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
