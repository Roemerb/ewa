import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import ProgressStats from '../controls/ProgressStats'

export default class DashboardPage extends Component {


    render () {
        return (
            <div>
                <div className="push-30"></div>
                <h1 className="text-center title">Student dashboard</h1>
                <ProgressStats vereist={60} behaald={10}/>
            </div>
        )
    }
}