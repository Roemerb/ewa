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
                                <th>Study Name</th>
                                <th>Class</th>
                                <th>Student </th>
                                <th>Course </th>
                                <th>Grade</th>
                                <th>behaald</th>
                            </tr>
                        </thead>
                        <tbody>

                        {
                            this.props.result.map(function (result) {

                                var coursename = 'test'


                                $.ajax({
                                    type: "GET",
                                    dataType: "json",
                                    url: 'http://localhost:8080/grade/' + result.id + '/exam/course',
                                    success: function (response) {
                                        coursename = response;
                                        console.log(coursename);
                                    }.bind(this),
                                    error: function (xhr, status, err) {
                                        console.error(this.props.url, status, err.toString());
                                    }.bind(this)
                                });
                                console.log(coursename);

                                return (

                                    <tr key={result.id}>
                                        <td><select> <option value="SE">{result.ects}</option></select></td>
                                        <td><select> <option value="Class">{result.id}</option></select></td>
                                        <td><select> <option value="Student #">{result.grade}</option></select></td>
                                        <td><select> <option value="Course">{result.gradeType}</option></select></td>
                                        <td><input type="text" name="Grade"></input></td>
                                        <td><select> <option value="Passed">✓</option></select></td>
                                    </tr>)
                            })}
                        </tbody>

                    </table>
                </div>
            </div>
        );
    }
}