/**
 * Created by Rene on 27-10-2016.
 */
import React from "react";
import ProgressBar from "../DashboardProgressBar";
import GradesTable from "../GradesTable";
import PositiveBSA from './PositiveBSA';
import NegativeBSA from './NegativeBSA';

export default class DashboardStats extends React.Component {

    constructor(props) {
        super(props);
        this.state = {data: []};
        this.fetchGrades();
    }

    componentDidMount() {
        this.getGradesFromServer('http://localhost:8080/user/1/grades');
    }

    fetchGrades() {
        fetch('http://localhost:8080/user/1/grades')
            .then((response) => {
                response.json().then((data) => {
                    this.grades = data;
                });
            });
    }

    //making ajax call to get data from server
    getGradesFromServer(URL) {
        $.ajax({
            type: "GET",
            dataType: "json",
            url: URL,
            success: function (response) {
                this.AddToArray(response);
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });

    }
    //showResult Method
    AddToArray(response) {

        this.setState({
                data: response
            }
        );

        this.state.data.map(function (data) {
            var ects = 0
                if (data.passed == 1) {

                    $.ajax({
                        type: "GET",
                        dataType: "json",
                        url: 'http://localhost:8080/grade/' + data.id + '/exam/course',
                        success: function (response) {

                            if (data.passed == 1)(
                                ects = ects + response.ects
                            )

                        }.bind(this),
                        error: function (xhr, status, err) {
                            console.error(this.props.url, status, err.toString());
                        }.bind(this)
                    });
                }

            }
        );
    }

    BSA() {
        if (this.props.behaald < 50)
        {
            return <NegativeBSA received={this.props.behaald}/>
        }
        else
        {
            return <PositiveBSA/>
        }
    }

    render() {

        return (
            <div className="puntenOverzicht">
                <div className="progressbar-container">


                    <ProgressBar behaald={this.props.behaald} vereist={this.props.vereist}/>

                    <p>Studiepunten (eenh.): {this.props.vereist} vereist, {this.props.behaald} behaald, {this.props.vereist - this.props.behaald} nog te behalen</p>
                    {this.BSA()}
                </div>
                <div>
                    <div className="row">
                        <div className="col-xs-6">

                            <h2>Periode</h2>
                        </div>
                        <div className="col-xs-6 rem-padding-right">
                            <div className="pull-right blok-progressbar">


                            </div>
                        </div>
                        <div className="col-xs-12">
                            <GradesTable grades={this.state.data}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}