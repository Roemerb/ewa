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
        this.state = {courses: []};
    }

    componentDidMount() {
        client({method: 'GET', path: 'http://localhost:8080/course/'}).done(response => {
            // In principe moet hier alles in een array
            // this.setState({courses: response.entity._embedded.courses});
        });
    }

    render() {
        return (
            <div className="puntenOverzicht">
                <div className="progressbar-container">


                    <ProgressBar behaald={this.props.behaald} vereist={this.props.vereist}/>

                    <p>Studiepunten (eenh.): {this.props.vereist} vereist, {this.props.behaald}
                        behaald, {this.props.vereist - this.props.behaald} nodig</p>
                    <p>Studiedelen: 13 vereist, 6 behaald, 7 nodig</p>
                    <button disabled>Propedeuse verzoek genereren</button>
                </div>
                <ProgressTable />
            </div>


        );
    }
}