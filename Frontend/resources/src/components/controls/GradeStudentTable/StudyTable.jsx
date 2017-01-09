/**
 * Created by Joshua on 20-12-2016.
 */
import React from "react";

export default class StudyTable extends React.Component {

    render() {

        return (
            //show all studies
            <div className="Requirement-table">
                <div className="col-xs-12">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Study Name</th>
                            </tr>
                        </thead>
                        <tbody>
                                {
                                this.props.result.map(function (result) {
                                return (
                                    <tr key={result.id}>
                                <td><select> <option value="Class">IS205</option></select></td>
                                        <td><select> <option value="Class">{result.name}</option></select></td>
                                    </tr>)
                                })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
