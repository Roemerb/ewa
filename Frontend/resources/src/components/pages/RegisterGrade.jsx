import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import StudentTable from '../controls/GradeStudentTable'

export default class RegisterGradePage extends Component {
   constructor(props) {
        super(props);
        this.state = {username: 'joshua'} ;
    }

    render () {
        return (
            <div>
                <h1 className="text-center title">Register Student Grades :</h1>
            </div>
        )
    }
p
}