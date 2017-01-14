import React from 'react';
import Tabs from 'react-bootstrap/lib/Tabs';
import Tab from 'react-bootstrap/lib/Tab';
import ProgressYearTabContent from './ProgressYearTabContent';

export default class ProgressYearTabs extends React.Component {

    constructor(props) {
        super(props);

        /*
         * To know if we want to render a year tab, we want to know if the semesters in that year
         * have any courses. Therefore we need to devide the courses in to semesters. After that,
         * when we go over each year, we can check if the semesters in that year have any courses.
         */
        this.devideCoursesInSemesters(this.props.user.group.study_program.courses);
    }

    renderYearTabs(noOfYears)
    {
        var yearTabs = []; // Define empty array to hold tabs

        for(var i = 1; i <= noOfYears; i++) // For each year
        {
            /*
             * We want to provide all the years courses to the component managing the content of the
             * year tab. To collect these, we loop through each semester in the year and add it's
             * courses (if it has any) to an array. After that, we check if the array holding the
             * is empty or not. If not, it means that the year has courses, so we make a tab for it.
             * Otherwise, we do nothing.
             */
            var coursesForYear = []; // Empty array holding the years courses

            var yearsSemesters = this.getSemestersForYear(i);
            for(var semester in yearsSemesters) // For each semester in the year
            {
                if ([yearsSemesters[semester]] in this.devidedCourses) {
                    console.log(this.devidedCourses[yearsSemesters[semester]]);
                    // Combine the semesters courses with the courses that are already in the array
                    coursesForYear = coursesForYear.concat(this.devidedCourses[yearsSemesters[semester]]);
                }
            }

            // Does the array have items (aka does the year have courses)?
            if (coursesForYear.length > 0) {
                var row = // Define the year tab
                    <Tab eventKey={'year_'+i} key={'year_'+i} title={"Jaar " + i}>
                        <ProgressYearTabContent semesters={yearsSemesters} courses={coursesForYear} />
                    </Tab>;
                yearTabs.push(row); // Push the year tab onto the array
            }
        }

        return yearTabs; // Return the year tabs
    }

    /**
     * Devides all the user's programs courses in to semesters
     *
     * @param courses
     */
    devideCoursesInSemesters(courses) {
        this.devidedCourses = {}; // Define empty object

        courses.map((course) => { // For each course
            // Have we seen a course in this semester before?
            if (this.devidedCourses[course.semester] == undefined)
                this.devidedCourses[course.semester] = []; // No, so define it

            // Add the course to the semester
            this.devidedCourses[course.semester][course.id] = course;
        });
    }

    /**
     * Generates an array with the two semesters in the given year
     *
     * @param year
     * @returns {[*,*]}
     */
    getSemestersForYear(year) {
        /*
         * Each year has two semesters, so the second semester is (the year * 2). The
         * first semester is (the second semester - 1).
         *
         * Examples:
         *
         * Year = 1
         * Second semester: (Year * 2) = 2
         * First semester: (Second semester - 1) = 1
         *
         * Year = 3
         * Second semester = (Year * 2) = 6
         * First semester = (Second semester - 1) = 5
         */
        var yearsSecondSemester = (year * 2);
        var yearsFirstSemester = yearsSecondSemester - 1;

        return [yearsFirstSemester, yearsSecondSemester];
    }

    getCoursesForYear(year)
    {
        var coursesForYear = {};
        this.props.user.group.study_program.courses.map((course) => {
            if (Math.floor(course.semester / 2) === year)
            {
                coursesForYear[course.id] = course;
            }
        });

        return coursesForYear;
    }

    render() {
        return(
            <Tabs defaultActiveKey={'year_1'} id="progressYearTabs">
                {this.renderYearTabs(this.props.user.group.study_program.durationYears)}
            </Tabs>
        );
    }
}