import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import DashboardRetakes from '../controls/DashboardRetakes'

export default class RetakesPage extends Component {


    render () {
        return (
            <div>
                <div className="push-20"></div>
                <h1 className="text-center title">Herkansingen</h1>
                <DashboardRetakes />
            </div>
        )
    }
}