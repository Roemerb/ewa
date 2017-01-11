import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import ProgressStats from "../controls/DashboardStats";

export default class HomePage extends Component {

    host = "http://localhost:8080";

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

    getDataFromServer(URL)
    {
        var context = this;
        fetch(URL)
            .then(
                function(response) {
                    if (response.status !== 200) {
                        console.log('Error fetching: ' + URL + ' Status: ' + response.status);
                        return;
                    }

                    response.json().then(function(data) {
                        context.showResult(data);
                    });
                }
            )
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