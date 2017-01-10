import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import ProgressStats from "../controls/DashboardStats";

export default class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {data: []};
    }

    componentDidMount() {
        this.getDataFromServer('http://localhost:8080/user/1/grades');
    }

    showResult(response) {
        this.setState({
                data: response
            }
        );
    }

    getDataFromServer(URL) {
        $.ajax({
            type: "GET",
            dataType: "json",
            url: URL,
            success: function (response) {
                this.showResult(response);
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    }

    render() {
        var behaald = this.state.data.reduce(function (previous, next) {
            return previous + (next.passed ? next.ects : 0);
        }, 0 /* initialValue */);


        return (
            <div>
                <div className="push-30"></div>
                <h1 className="title">Dashboard</h1>
                <ProgressStats vereist={60} behaald={behaald}/>
            </div>
        )
    }
}