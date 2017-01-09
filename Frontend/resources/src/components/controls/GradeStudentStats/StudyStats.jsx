/**
 * Created by Joshua on 04-01-2017.
 */
import React from "react";
import {StudyTable} from "../GradeStudentTable"

export default class StudyStats extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: []};
    }

    componentDidMount() {
        this.getDataFromServer('http://localhost:8080/limitedPersonal/5/1');
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
            <div>
                <StudyTable result={this.state.data}/>
            </div>
        );
    }
}