/**
 * Created by Rene on 27-10-2016.
 */
import React, { Component } from 'react'
import { applyMiddleware, createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux'
import { Button } from 'react-bootstrap';

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

import PageNotFound from './components/pages/404'
import LoginPage from './components/pages/Login'
import RegisterGradePage from './components/pages/RegisterGrade'
import NotificationsPage from './components/pages/Notifications'
import ProgressPage from './components/pages/Progress';

// ---------------------
// Stores
// ---------------------
import UserStore from './stores/UserStore';

// ---------------------
// Actions
// ---------------------
import * as UserActions from './actions/UserActions';

const initialState = {};

const middleware = routerMiddleware(browserHistory);

const store = createStore(
    combineReducers(reducers),
    initialState,
    applyMiddleware(middleware)
);

const history = syncHistoryWithStore(browserHistory, store);

export default class App extends Component {

    host = "http://localhost:8080";
    userEndpoint = "/user/";

    userId = 1;

    constructor() {
        super();
        UserActions.userLogin(this.userId, function () {
            console.log('Done fetching user', UserStore.get());
        });
    }

    setUserInState(user)
    {
        this.setState({"user": user});
    }

    render () {
        const locale = 'en';

        const messages = { ...require('./strings/' + locale).default };


        return (
            <IntlProvider locale={locale} messages={messages}>
                <Provider store={store}>
                    <Router history={history}>
                        <Route path="/" component={MainContainer}>
                            <IndexRoute component={HomePage} />
                            <Route path="/progress" component={ProgressPage} />
                            <Route path ='/registergrade' component={RegisterGradePage} />
                            <Route path='/notifications' component={NotificationsPage} />
                        </Route>
                        <Route path='/login' component={LoginPage} />
                        <Route path='*' component={PageNotFound} />
                    </Router>
                </Provider>
            </IntlProvider>
        )
    }
}