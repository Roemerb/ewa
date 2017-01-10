/**
 * Created by Joshua on 20-12-2016.
 */
import React from "react";

import {StudentTable} from "../GradeStudentTable"
import {ClassStats, StudentStats} from "../GradeStudentStats"

export default class GradeStudentStats extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: []};
    }

    componentDidMount() {
        this.getDataFromServer('http://localhost:8080/user/1/grades');
    }

    //showResult Method
    showResult(response) {

        this.setState({
                data: response
            }
        );
    }

    //making ajax call to get data from server
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

    //making ajax call to get data from server
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
        return (
        <div className="col-xs-12">
            <StudentTable result={this.state.data} />
        </div>
        );
    }
}