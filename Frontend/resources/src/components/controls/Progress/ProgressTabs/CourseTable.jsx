import React from 'react';
import Table from 'react-bootstrap/lib/Table';
import DetailModal from './DetailModal';

export default class CourseTable extends React.Component {

    constructor(props) {
        super(props);
    }

    /**
     * Renders the table
     *
     * @returns {Array}
     */
    renderTableRows() {

        var rows = []; // Empty array to hold the table rows

        for(var course in this.props.courses) { // For reach course
            var courseObject = this.props.courses[course]; // Save course object for readability
            var type = ''; // Variable to hold the parsed course type

            switch(courseObject.type) { // Parse the course type
                case 'project':
                case 'PROJECT':
                    type = 'Project';
                    break;
                case 'regular':
                case 'REGULAR':
                default:
                    type = 'Regulair';
                    break;
            }

            var row = // Define the table row
                <tr key={'course_' + courseObject.id}>
                    <td>{courseObject.semester}</td>
                    <td>{courseObject.name}</td>
                    <td>{courseObject.ects}</td>
                    <td>{type}</td>
                    <td><DetailModal course={courseObject}/></td>
                </tr>

            rows.push(row);
        }

        return rows;
    }

    render() {
        return (
            <Table striped bordered condensed hover>
                <thead>
                <tr>
                    <th>Semester</th>
                    <th>Naam</th>
                    <th>ECTS</th>
                    <th>Type</th>
                    <th>Details</th>
                </tr>
                </thead>
                <tbody>
                    {this.renderTableRows()}
                </tbody>
            </Table>
        )
    }
}