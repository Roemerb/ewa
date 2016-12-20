import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import NotificationsInbox from '../controls/Notifications'

export default class NotificationsPage extends Component {


    render () {
        return (
            <div>
                <div className="push-30"></div>
                <h1 className="text-center title">Notifications</h1>
                <NotificationsInbox />
            </div>
        )
    }
}