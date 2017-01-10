/**
 * Created by Rene on 27-10-2016.
 */
import React from "react";
import ProgressBar from "../DashboardProgressBar";
import ProgressTable from "../DashboardTable";

export default class DashboardStats extends React.Component {

    constructor(props) {
        super(props);
        this.state = {data: [], ects: 0};

    }

    componentDidMount() {
        this.getGradesFromServer('http://localhost:8080/limitedPersonal/5/1');

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
    AddECTS(ectsCount) {

        this.setState({
                ects: ectsCount
            }
        );


    }
    //showResult Method
    AddToArray(response) {

        this.setState({
                data: response
            }
        );

        console.log(this.state.ects)



    }





    render() {

        return (
            <div className="puntenOverzicht">
                <div className="progressbar-container">


                    <ProgressBar behaald={this.state.ects} vereist={this.props.vereist}/>

                    <p>Studiepunten (eenh.): {this.props.vereist} vereist, {this.props.behaald} behaald, {this.props.vereist - this.props.behaald} nodig</p>


                </div>
                <div>
                    <div className="row">
                        <div className="col-xs-6">

                            <h2>Periode</h2>
                        </div>

                        <div className="col-xs-12">
                            <ProgressTable result={this.state.data}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}