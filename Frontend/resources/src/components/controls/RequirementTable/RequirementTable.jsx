/**
 * Created by Joshua on 27-10-2016.
 */
import React from "react";
import RequirementStats from '../RequirementStats'

export default class RequirementTable extends React.Component {

    render() {

        return (
            <div className="Requirement-table">
                <RequirementStats />
                <div className="col-xs-12">
                    <table>
                        <thead>
                            <tr>
                                <th>Studiedeel </th>
                                <th>Vaknaam</th>
                                <th>Eenheid</th>
                                <th>Datum</th>
                                <th>Cijfer</th>
                                <th>behaald</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>[STUDIEDEEL]</td>
                                <td>[VAKNAAM]</td>
                                <td>[WEIGHT]</td>
                                <td>[DATE]</td>
                                <td>[GRADE]</td>
                                <td>✓</td>
                            </tr>
                            <tr>
                                <td>[DMCI-ICT 100BUS_14]</td>
                                <td>[Business]</td>
                                <td>[3.00]</td>
                                <td>[1-1-2016]</td>
                                <td>[9.8]</td>
                                <td>✓</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

}
