/**
 * Created by Joshua on 20-12-2016.
 */
import React from "react";

import {StudentTable,ClassTable} from "../GradeStudentTable"

export default class StudentStats extends React.Component {


    render() {
        return (
        <div>
            <StudentTable />
            <ClassTable />
        </div>
        );
    }
}