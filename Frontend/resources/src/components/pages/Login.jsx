/**
 * Created by Onkarjit Singh on 8-11-2016.
 */

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'



export default class Login extends Component {
    constructor() {
        super();

        this.state = {
            user: "",
            pass: ""
        };
    }

    render() {
        return (
            <div>
                <div className="push-100 visible-sm visible-md visible-lg"></div>
                <h1 className="text-center"><img className="resize-150" src="images/hva.png"></img><span className="brand-text">SIS</span></h1>
                <div className="push-30"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-8 col-xs-offset-2 col-sm-8 col-sm-offset-2 col-md-4 col-md-offset-4">
                            <div>
                                <form role="form"  method="post">
                                    Select a user
                                    <div className="form-group">
                                    <a href="/">Log in as student with id 1</a>


                                    </div>
                                   

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}