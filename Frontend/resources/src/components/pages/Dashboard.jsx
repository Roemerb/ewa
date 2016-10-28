import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import ProgressStats from '../controls/ProgressStats'

export default class DashboardPage extends Component {


    render () {
        return (
            <div>
                <ProgressStats vereist={60} behaald={10}/>
            </div>
        )
    }
}