/**
 * Created by Rene on 27-10-2016.
 */
import React, { Component } from 'react'
import { applyMiddleware, createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux'

// ---------------------
// Reducers
// ---------------------

import reducers from './reducers'

import classes from '../less/app.less'

// ---------------------
// Components
// ---------------------

import { IntlProvider } from 'react-intl'
import MainContainer from './components/containers/Main'

import HomePage from './components/pages/Home'
import DashboardPage from './components/pages/Dashboard'
import PageNotFound from './components/pages/404'
import LoginPage from './components/pages/Login'
import RequirementsPage from './components/pages/Study_Requirements'

const initialState = {};

const middleware = routerMiddleware(browserHistory);

const store = createStore(
    combineReducers(reducers),
    initialState,
    applyMiddleware(middleware)
);

const history = syncHistoryWithStore(browserHistory, store);

export default class App extends Component {

    render () {
        const locale = 'en';

        const messages = { ...require('./strings/' + locale).default };


        return (
            <IntlProvider locale={locale} messages={messages}>
                <Provider store={store}>
                    <Router history={history}>
                        <Route path="/" component={MainContainer}>
                            <IndexRoute component={DashboardPage} />
                            <Route path='/dashboard' component={DashboardPage} />
                            <Route path='/requirements' component={RequirementsPage} />
                        </Route>
                        <Route path='/login' component={LoginPage} />
                        <Route path='*' component={PageNotFound} />
                    </Router>
                </Provider>
            </IntlProvider>
        )
    }
}