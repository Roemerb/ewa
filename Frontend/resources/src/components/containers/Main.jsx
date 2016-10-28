import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'


export default class MainContainer extends Component {

    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-2 nav-row">
                        <div className="navigatie">
                            <h2>navigatie</h2>
                            <ul>
                                <li>Propedeuse fase</li>
                                <li>Tentamen schema</li>
                                <li>Remedial</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-10 progress-box">
                        {this.props.children}
                    </div>
                </div>
            </div>

        )
    }
}