import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import StudyPlanningStats from '../controls/StudyPlan/Stats/StudyPlanningStats';

export default class StudyPlanningPage extends Component {

    render () {
        return (
            <div>
                <div className="push-20"> </div>
                <h1 className="title">Jouw Studyplanning!</h1>
                <StudyPlanningStats/>
            </div>
        )
    }
}