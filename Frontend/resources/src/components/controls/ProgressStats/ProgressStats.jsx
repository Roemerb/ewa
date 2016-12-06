/**
 * Created by Rene on 27-10-2016.
 */
import React from "react";
import ProgressBar from "../ProgressBar";
import ProgressTable from "../ProgressTable";
import client from "../../../Client";
export default class ProgressStats extends React.Component {

    constructor(props) {
        super(props);
        this.state = {data: []} ;
    }
    componentDidMount(){
        this.getDataFromServer('http://localhost:8080/course');
    }
    //showResult Method
    showResult(response) {

        this.setState({
            data: response

        }
        );
    }
    //making ajax call to get data from server
    getDataFromServer(URL){
        $.ajax({
            type:"GET",
            dataType:"json",
            url:URL,
            success: function(response) {
                this.showResult(response);
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    }

    render() {
        console.log(this.state.data[0]);
        return (
            <div className="puntenOverzicht">
                <div className="progressbar-container">


                    <ProgressBar behaald={this.props.behaald} vereist={this.props.vereist}/>

                    <p>Studiepunten (eenh.): {this.props.vereist} vereist, {this.props.behaald}
                        behaald, {this.props.vereist - this.props.behaald} nodig</p>
                    <p>Studiedelen: 13 vereist, 6 behaald, 7 nodig</p>
                    <button disabled>Propedeuse verzoek genereren</button>
                </div>
                <div>
                    <div className="row">
                        <div className="col-xs-6">

                            <h2>Periode</h2>
                        </div>
                        <div className="col-xs-6 rem-padding-right">
                            <div className="pull-right blok-progressbar">
                                <ProgressBar behaald="5" vereist="15"/>
                                19 behaald, nog 3 nodig voor dit blok<br/>
                                Gemiddelde: 17 punten
                            </div>
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