/**
 * Created by Joshua on 20-12-2016.
 */
import React from "react";

export default class ClassTable extends React.Component {
    render() {

        return (
        //show all classes from selected study
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
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
