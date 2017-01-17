import React from 'react';
import Table from 'react-bootstrap/lib/Table';
import Tabs from 'react-bootstrap/lib/Tabs';
import Tab from 'react-bootstrap/lib/Tab';

export default class DetailModalContent extends React.Component {

    course = {};

    constructor(props)
    {
        super(props);

        this.parseCourse();
        console.log(this.props);
    }

    parseCourse() {

        this.course.semester = this.props.course.semester;
        this.course.name = this.props.course.name;
        this.course.ects = this.props.course.ects;

        var passed = false;
        for(var grade in this.props.grades) {
            var obj = this.props.grades[grade];

            if (obj.passed) {
                passed = true;
            }
        }

        if (passed == true) {
            this.course.passed = <span style={{color:'green'}}>Ja</span>;
        }
        else {
            this.course.passed = <span style={{color:'red'}}>NEE</span>;
        }

        switch(this.props.course.type) { // Parse the course type
            case 'project':
            case 'PROJECT':
                this.course.type = 'Project';
                break;
            case 'regular':
            case 'REGULAR':
            default:
                this.course.type = 'Regulair';
                break;
        }
    }

    getFirstExam() {
        for(var exam in this.props.exams)
        {
            return this.props.exams[exam].id;
        }
    }

    renderExamTabs() {
        var tabs = [];

        for(var exam in this.props.exams) {
            var examObject = this.props.exams[exam];

            var examType = '';
            var date = new Date(examObject.dateAndTime);

            switch(examObject.type) {
                case 'regular':
                case 'REGULAR':
                    examType = 'Tentamen';
                    break;
                default:
                    examType = 'Hertentamen';
            }

            var grade = {};
            for(var gradeId in this.props.grades) {
                var gradeObject = this.props.grades[gradeId];
                if (gradeObject.exam.id == examObject.id) {
                    grade = gradeObject;
                }
            }

            if (grade.grade !== undefined) {
                var tableGrade = grade.grade;
            }
            else {
                var tableGrade = '(Nog) niet gemaakt';
            }

            var tab =
                <Tab eventKey={'exam_' + examObject.id} key={'exam_' + examObject.id} title={examType}>
                    <Table striped bordered condensed hover>
                        <thead>
                        <tr>
                            <th>Eigenschap</th>
                            <th>Data</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Type</td>
                            <td>{examType}</td>
                        </tr>
                        <tr>
                            <td>Cijfer</td>
                            <td>{tableGrade}</td>
                        </tr>
                        <tr>
                            <td>Datum</td>
                            <td>{
                                    date.getDay() + '-' + date.getMonth() + '-' + date.getFullYear() + ' om ' + date.getHours() +
                                     ':' + date.getMinutes()
                                }
                            </td>
                        </tr>
                        <tr>
                            <td>Locatie</td>
                            <td>{examObject.location}</td>
                        </tr>
                        </tbody>
                    </Table>
                </Tab>;

            tabs.push(tab);
        }

        return tabs;
    }

    render() {
        return (
            <div>
                <Table striped bordered condensed hover>
                    <thead>
                    <tr>
                        <th>Eigenschap</th>
                        <th>Data</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Semester</td>
                        <td>{this.course.semester}</td>
                    </tr>
                    <tr>
                        <td>Naam</td>
                        <td>{this.course.name}</td>
                    </tr>
                    <tr>
                        <td>Gehaald?</td>
                        <td>{this.course.passed}</td>
                    </tr>
                    <tr>
                        <td>Type vak</td>
                        <td>{this.course.type}</td>
                    </tr>
                    <tr>
                        <td>ECTS</td>
                        <td>{this.course.ects}</td>
                    </tr>
                    </tbody>
                </Table>

                <Tabs defaultActiveKey={'exam_' + this.getFirstExam()} id="examTabs">
                    {this.renderExamTabs()}
                </Tabs>
            </div>
        )
    }
}