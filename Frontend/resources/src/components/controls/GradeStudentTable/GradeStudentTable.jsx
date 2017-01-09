/**
 * Created by Joshua on 20-12-2016.
 */
import React from "react";

export default class StudentTable extends React.Component {
    render() {

        return (
        //show all students from the selected Study and class
            <div className="Requirement-table">
                <div className="col-xs-12">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Study</th>
                                <th>Class</th>
                                <th>student #</th>
                                <th>Student</th>
                                <th>Grade</th>
                                <th>behaald</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td><select> <option value="SE">Software Engineer</option></select></td>
                            <td><select> <option value="Class">IS205</option></select></td>
                            <td><select> <option value="Student #">500728417</option></select></td>
                            <td><select> <option value="Student">Joshua Turpijn</option></select></td>
                            <td><input type="text" name="Grade"></input></td>
                            <td><select> <option value="Passed">✓</option></select></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}