/**
 * Created by Rene on 27-10-2016.
 */
import React from "react";
export default class DashboardTable extends React.Component {


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
                                <td>{result.id}</td>
                                <td>{result.exam.course.name}</td>
                                <td>{result.gradeType}</td>
                                <td>{result.grade}</td>
                                <td>{result.passed == 1 && "Gehaald" || "niet behaald"}</td>
                            </tr>)
                    })}
                </tbody>

            </table>
        );
    }

}
