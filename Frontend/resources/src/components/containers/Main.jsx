import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import NavBar from '../controls/NavBar'

export default class MainContainer extends Component {

    render () {
        return (
            <div id="main-div">
                <NavBar />
                <div className="main">
                    <div class="row">
                        <div className="col-xs-12 progress-box">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}