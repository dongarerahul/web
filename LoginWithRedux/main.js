import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import LoginApp from './LoginApp.js'
import actionReducers from './reducers/reducers'

let store = createStore(actionReducers)

let rootElement = document.getElementById('app')

render(
  <Provider store = {store}>
    <LoginApp />
  </Provider>,

  rootElement
)
