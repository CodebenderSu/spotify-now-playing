import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import App from './App';
import rootReducer from './reducers';
import './index.css';

const persistConfig = {
  key: 'root',
  storage
};

const middleware = applyMiddleware(thunk);
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, {}, middleware);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistStore(store)}>
      <App />
    </PersistGate>
  </Provider>
  , document.getElementById('root')
);
