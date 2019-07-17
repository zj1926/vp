import 'core-js';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './modules/app';
import store from './config/store';
import { LanguageContextProvider } from './context/LanguageContext';

ReactDOM.render(
  <Provider store={store}>
    <LanguageContextProvider>
      <App dispatch={store.dispatch} />
    </LanguageContextProvider>
  </Provider>,
  document.getElementById('app')
);