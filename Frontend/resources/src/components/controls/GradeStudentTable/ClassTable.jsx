/**
 * Created by Joshua on 20-12-2016.
 */
import React from "react";

export default class ClassTable extends React.Component {

    render() {

        return (
        //show all classes from selected study
            <div className="Requirement-Classtable">
                <div className="col-xs-12">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Study Name</th>
                                <th>Class</th>
                            </tr>
                        </thead>
                        <tbody>
                                 {
                                 this.props.result.map(function (result) {
                                 return (
                                     <tr key={result.id}>
                                        <td><select> <option value="SE">{result.name}</option></select></td>
                                        <td><select> <option value="Class">{result.class}</option></select></td>
                                     </tr>)
                                 })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
