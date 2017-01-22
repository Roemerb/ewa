/**
 * Created by John on 27-10-2016.
 */
import React from "react";
export default class DashboardRetakes extends React.Component {
    render() {
        return (
            <div class="container">
                <div class="row pull-left">
                    <div class="col-xs-12 col-md-2 nav-row">
                        <div class="navigatie">
                            <h2>navigatie</h2>
                            <ul>
                                <li>Propedeuse fase</li>
                                <li>Tentamen schema</li>
                                <li>Remedial</li>
                            </ul>
                        </div>
                    </div>

                    <div class="wrapper pull-right">
                        <h2>Herkansingen</h2>
                        <h3>Overzicht</h3>
                        <div class="table-responsive">
                            <table class="table panel-footer table-stripped">
                                <thead>
                                <tr>
                                    <th>Vak</th>
                                    <th>Cijfer</th>
                                    <th>Gehaald</th>
                                    <th>Inschrijven</th>
                                </tr>
                                </thead>
                                <tbody>
                               <tr>
                                   <td>
                                       Test
                                   </td>                                   <td>
                                   Test
                               </td>                                   <td>
                                   Test
                               </td>                                   <td>
                                   Test
                               </td>                                   <td>
                                   Test
                               </td>                                   <td>
                                   Test
                               </td>
                               </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>

        );
    }

}
