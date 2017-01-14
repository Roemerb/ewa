import React from 'react';
import Tabs from 'react-bootstrap/lib/Tabs';
import Tab from 'react-bootstrap/lib/Tab';


export default class ProgressYearTabContent extends React.Component {
    constructor(props) {
        super(props);

        console.log('props', this.props);
    }

    getFirstSemester() {
        for(var semester in this.props.semesters) {
            return this.props.semesters[semester];
        }
    }

    renderSemesterTabs() {
        var tabs = [];
        var coursesPerSemester = [];

        for(var course in this.props.courses) {
            var courseObject = this.props.courses[course];
            if (coursesPerSemester[courseObject.semester] == undefined)
                coursesPerSemester[courseObject.semester] = [];

            coursesPerSemester[courseObject.semester][courseObject.id] = courseObject;
        }

        for(var semester in coursesPerSemester) {
            var tab =
                <Tab eventKey={'semester_' + semester} key={'semester_' + semester} title={'Semester ' + semester}>
                    Content!
                </Tab>

            tabs.push(tab);
        }

        return tabs;
    }

    render() {
        return (
            <Tabs defaultActiveKey={'semester_' + this.getFirstSemester()} id="progressSemesterTabs">
                {this.renderSemesterTabs()}
            </Tabs>
        )
    }
}