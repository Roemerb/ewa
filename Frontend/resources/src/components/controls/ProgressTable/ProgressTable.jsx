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
                    <th>type</th>
                    <th>grade</th>
                    <th>passed</th>

                </tr>
                </thead>
                <tbody>
                {

                    this.props.result.map(function (result, index) {
                    return (
                        <tr key={result.id}>
                            <td>{result.id}</td>
                            <td>{result.courseId}</td>
                            <td>{result.gradeType}</td>
                            <td>{result.grade}</td>
                            <td>{result.passed}</td>


                        </tr>)
                })}
                </tbody>
            </table>
        );
    }

}
