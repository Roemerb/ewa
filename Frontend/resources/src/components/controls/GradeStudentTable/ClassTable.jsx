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
                            <td><select> <option value="Student #">50072843987</option></select></td>
                            <td><select> <option value="Student">Roemer Bakker</option></select></td>
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
