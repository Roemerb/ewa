/**
 * Created by Joshua on 20-12-2016.
 */
import React from "react";

import {StudyTable, ClassTable, StudentTable} from "../GradeStudentTable"
import {ClassStats, StudentStats} from "../GradeStudentStats"

export default class GradeStudentStats extends React.Component {

    render() {
        return (
        <div>
            <StudyStats />
        </div>
        );
    }
}