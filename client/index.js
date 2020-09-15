//webpack bundles CSS
import '../public/style.css';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Root from './components/Root'

//React and redux Dom rendering with #app defined in html
render(
  <Provider store={store}>
    <div>Hello, world!</div>
    <Root />
  </Provider>,
  document.getElementById('app')
)