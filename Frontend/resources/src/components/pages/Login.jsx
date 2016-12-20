/**
 * Created by Onkarjit Singh on 8-11-2016.
 */

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import client from "../../Client";


export default class Login extends Component {
    constructor() {
        super();

        this.state = {
            user: "",
            pass: ""
        };
    }

    onSubmit(e) {
        e.preventDefault();

        client({
            method: 'POST',
            path: 'http://localhost:8080/auth/token',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Access-Control-Allow-Origin": "*"

            }
        }).done(response => {
            console.log(response);
        });
    }

    onChange(field, e) {
        this.state[field] = e.target.value;
        this.setState(this.state);
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
                                <form role="form"  method="post" onSubmit={this.onSubmit.bind(this)}>
                                    <div className="form-group">
                                        <input type="text" className="form-control input-lg" id="inputUsername"  name="user" required="required" placeholder="HVA ID" onChange={this.onChange.bind(this, "user")} value={this.state.user} />

                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control input-lg" id="inputPassword" name="pass" required="required" placeholder="Wachtwoord" onChange={this.onChange.bind(this, "pass")} value={this.state.pass} />
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