import React from 'react';
import Tabs from 'react-bootstrap/lib/Tabs';
import Tab from 'react-bootstrap/lib/Tab';
import CourseTable from './CourseTable';


export default class ProgressYearTabContent extends React.Component {
    constructor(props) {
        super(props);
    }

    /**
     * Returns the first semester for the defaultActiveKey of the tabs
     *
     * @returns {*}
     */
    getFirstSemester() {
        for(var semester in this.props.semesters) { // For each semester prop
            return this.props.semesters[semester]; // Return the first one right away
        }
    }

    /**
     * Renders the tabs. Only creates tab if a semester has courses
     *
     * @returns {Array}
     */
    renderSemesterTabs() {
        var tabs = []; // The tabs to be returned
        var coursesPerSemester = []; // Courses will be devided between their semesters

        for(var course in this.props.courses) { // For each course
            var courseObject = this.props.courses[course]; // Save course object for readability
            if (coursesPerSemester[courseObject.semester] == undefined) // Check if the semester exists already
                coursesPerSemester[courseObject.semester] = []; // If not, create an empty array for courses

            coursesPerSemester[courseObject.semester][courseObject.id] = courseObject; // Save course to the array
        }

        for(var semester in coursesPerSemester) { // For reach semester
            var tab = // Define the tab
                <Tab eventKey={'semester_' + semester} key={'semester_' + semester} title={'Semester ' + semester}>
                    <CourseTable courses={coursesPerSemester[semester]}/>
                </Tab>;

            tabs.push(tab); // Push the tab onto the array
        }

        return tabs;
    }

    /**
     * Render the component
     *
     * @returns {HTML}
     */
    render() {
        return (
            <Tabs defaultActiveKey={'semester_' + this.getFirstSemester()} id="progressSemesterTabs">
                {this.renderSemesterTabs()}
            </Tabs>
        )
    }
}