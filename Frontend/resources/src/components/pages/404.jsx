/**
 * Created by Onkarjit Singh on 8-11-2016.
 */

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'


export default class PageNotFound extends Component {
    render() {
        return (
            <div className="notfound-div-1">
                <div className="notfound-div-2">
                    <div className="notfound-div-3">
                        <h1 className="notfound">404</h1>
                        <h2 className="notfound">Not Found</h2>
                        <p>The resource requested could not be found on this server!</p>
                    </div>
                </div>
            </div>
        )
    }
}