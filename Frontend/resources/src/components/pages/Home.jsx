import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";

export default class HomePage extends Component {
    constructor() {
        super();
        this.state = {name: "René"};
    }

    render() {
        return (
            <div>
                Welkom, {this.state.name}
            </div>
        )
    }
}