import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import RequirementTable from '../controls/RequirementTable'

export default class DashboardPage extends Component {
   constructor(props) {
        super(props);
        this.state = {username: 'joshua'} ;
    }

    render () {
        return (
            <div>
                <h1 className="text-center title">Study Requirements</h1>
                <RequirementTable />
                <RequirementTable />
                <RequirementTable />
                <RequirementTable />

            </div>
        )
    }

}