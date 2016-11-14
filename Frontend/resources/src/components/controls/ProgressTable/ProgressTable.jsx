/**
 * Created by Rene on 27-10-2016.
 */
import React from "react";
import TableTr from "./TableTr";
import ProgressBar from "../ProgressBar";
export default class ProgressTable extends React.Component {

    render() {

        return (
            <div>
                <div className="row">
                    <div className="col-xs-6">

                        <h2>Periode</h2>
                    </div>
                    <div className="col-xs-6">
                        <div className="pull-right blok-progressbar">
                            <ProgressBar behaald="5" vereist="15"/>
                            19 behaald, nog 3 nodig voor dit blok<br/>
                            Gemiddelde: 17 punten
                        </div>
                    </div>
                    <div className="col-xs-12">
                        <table>

                            <thead>
                            <tr>
                                <th>Blok</th>
                                <th>Vaknr</th>
                                <th>Onderdelen</th>
                                <th>Status</th>
                                <th>Herkansingsperiode</th>
                                <th>Gemiddelde</th>
                            </tr>
                            </thead>
                            <tbody>



                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }

}