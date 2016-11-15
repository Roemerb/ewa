/**
 * Created by Onkarjit Singh on 8-11-2016.
 */

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'


export default class Login extends Component {
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
                                <form role="form" action="/login" method="post">
                                    <div className="form-group">
                                        <input type="text" className="form-control input-lg" id="inputUsername"  name="user" required="required" placeholder="HVA ID" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control input-lg" id="inputPassword" name="pass" required="required" placeholder="Wachtwoord" />
                                    </div>
                                    <button type="submit" className="btn btn-primary pull-right " name="submitted" value="1"><span className="glyph glyphicons-log-in"></span> Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}