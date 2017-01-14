import React from 'react';
import Table from 'react-bootstrap/lib/Table';

export default class GradeDetailModalContent extends React.Component {

    grade = {};

    constructor(props)
    {
        super(props);

        this.parseGrade();
    }

    parseGrade() {

        this.grade.grade = this.props.grade.grade;
        this.grade.courseName = this.props.grade.exam.course.name;
        this.grade.ects = this.props.grade.exam.course.ects;

        if (this.props.grade.passed)
        {
            this.grade.passed = "Ja";
        }
        else {
            this.grade.passed = "Nee";
        }

        switch(this.grade.gradeType)
        {
            case "PRACTICAL":
                this.grade.type = "Praktisch";
                break;
            case "REGULAR":
            default:
                this.grade.type = "Schriftelijk";
                break;
        }
    }

    render() {
        return (
            <Table striped bordered condensed hover>
                <thead>
                <tr>
                    <th>Eigenschap</th>
                    <th>Data</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Vak</td>
                    <td>{this.grade.courseName}</td>
                </tr>
                <tr>
                    <td>Cijfer</td>
                    <td>{this.grade.grade}</td>
                </tr>
                <tr>
                    <td>Gehaald?</td>
                    <td>{this.grade.passed}</td>
                </tr>
                <tr>
                    <td>Type examen</td>
                    <td>{this.grade.type}</td>
                </tr>
                <tr>
                    <td>ECTS voor vak</td>
                    <td>{this.grade.ects}</td>
                </tr>
                </tbody>
            </Table>
        )
    }
}