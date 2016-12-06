/**
 * Created by Rene on 27-10-2016.
 */
import React from "react";
export default class ProgressTable extends React.Component {
    render() {
        return (
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>id</th>
                    <th>CourseID</th>
                    <th>Semester</th>
                    <th>Naam</th>
                    <th>Type</th>
                    <th>ECTS</th>
                </tr>
                </thead>
                <tbody>
                {this.props.result.map(function (result, index) {
                    return (
                        <tr>
                            <td>{result.id}</td>
                            <td>{result.studyProgramId}</td>
                            <td>{result.semester}</td>
                            <td>{result.name}</td>
                            <td>{result.type}</td>
                            <td>{result.ects}</td>

                        </tr>)
                })}
                </tbody>
            </table>
        );
    }

}
