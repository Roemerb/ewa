import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";

export default class HomePage extends Component {
    constructor() {
        super();
        this.state = {name: "René"};
    }

    render () {
        return (
            <div>
                <div className="push-30"></div>
                <h1 className="text-center title">HvA Student dashboard</h1>
                <p>Hallo, {this.state.name}</p>
            </div>
        )
    }
}