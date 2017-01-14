import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import {GradeStudentStats} from '../controls/GradeStudentStats'

export default class RegisterGradePage extends Component {

    render () {
        return (
            <div>
                <div className="push-20"> </div>
                <h1 className="title">Register Student Grades</h1>
                <GradeStudentStats />
            </div>
        )
    }
}