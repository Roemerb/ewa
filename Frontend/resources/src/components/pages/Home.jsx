import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import ProgressStats from '../controls/DashboardStats'

export default class HomePage extends Component {


    render () {
        return (
            <div>
                <div className="push-30"></div>
                <h1 className="title">Dashboard</h1>
                <ProgressStats vereist={60} behaald={10}/>
            </div>
        )
    }
}