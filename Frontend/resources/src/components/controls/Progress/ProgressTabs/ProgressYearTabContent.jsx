import React from 'react';
import Tabs from 'react-bootstrap/lib/Tabs';
import Tab from 'react-bootstrap/lib/Tab';


export default React.createClass({
    getInitialState() {
        return {
            programAvailable: false
        }
    },

    componentDidMount() {
        fetch('http://localhost:8080/studyprogram/1').then((programResponse) => {
            programResponse.json().then((data) => {
                this.program = data;

                this.setState.bind(this);

                this.setState({
                    programAvailable: true,
                    program: data,
                    devidedCourses: this.devideCoursesInSemesters(data.courses)
                });
            });
        });
    },

    devideCoursesInSemesters(courses) {
        if (courses != undefined)
        {
            var devidedCourses = {};

            courses.map((course) => {
                if (devidedCourses[course.semester] == undefined)
                {
                    devidedCourses[course.semester] = [];
                }

                devidedCourses[course.semester][course.id] = course;
            });

            return devidedCourses;
        }
    },

    getFirstSemester()
    {
        if (this.devidedCourses == undefined)
        {
            return 1;
        }

        for (semester in this.devidedCourses)
        {
            return semester;
        }
    },

    /**
     * Renders the semester tabs into the year tab content
     *
     * @returns {Array}
     */
    renderSemesterTabs() {
        var semesterTabs = []; // Define array to hold semester tabs

        for(var semester in this.state.devidedCourses) // For each available semester in this year
        {
            console.log('the semester', this.state.devidedCourses[semester]);
            var tab = // Define the tab
                <Tab eventKey={'semester_' + semester} key={'semester_' + semester} name={'Semester ' + semester}>
                    <p>Semester {semester}</p>
                </Tab>;

            semesterTabs.push(tab); // Push the new tab onto the array
        }

        return semesterTabs; // Return the tabs
    },

    render() {
        if (!this.state.programAvailable)
        {
            return (
                <p>Studie ophalen...</p>
            )
        }
        else
        {
            if (!this.state.devidedCourses)
            {
                return (
                    <p>Laden...</p>
                );
            }
            else
            {
                return (
                    <Tabs defaultActiveKey={'semester_' + this.getFirstSemester()} id="semesterTabs">

                    </Tabs>
                );
            }
        }
    }
});
