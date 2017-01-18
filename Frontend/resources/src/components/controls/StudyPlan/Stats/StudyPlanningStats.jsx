/**
 * Created by Joshua on 27-12-2016.
 */
import React from "react";
import StudyPlanningTable from '../Table/StudyPlanningTable';

export default class StudyPlanningStats extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
                <StudyPlanningTable />
        );
    }
}