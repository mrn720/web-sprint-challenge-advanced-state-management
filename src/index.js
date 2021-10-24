import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux"
import { Provider } from 'react-redux'
import "./index.css";
import App from "./App";
import thunk from 'redux-thunk'
import reducers from './reducers/index'

const store = createStore(reducers, applyMiddleware(thunk))

const { worker } = require('./mocks/browser');
worker.start();

const rootElement = document.getElementById("root");

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    rootElement
);