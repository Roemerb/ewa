import React from 'react';
import Table from 'react-bootstrap/lib/Table';

export default class GradesTable extends React.Component {
    render()
    {
        return (
            <Table striped bordered condensed hover>
                <thead>
                <tr>
                    <th>Vak</th>
                    <th>Cijfer</th>
                    <th>Gehaald?</th>
                    <th>Type Tentamen</th>
                    <th>ECTS</th>
                    <th>Bekijk Details</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.props.grades.map(function (grade) {
                        var passed = "";
                        if (grade.passed)
                        {
                            passed = "Ja";
                        }
                        else
                        {
                            passed = "Nee";
                        }
                        var type = "";
                        switch(grade.gradeType)
                        {
                            case "PRACTICAL":
                                type = "Praktisch";
                                break;
                            case "REGULAR":
                            default:
                                type = "Schriftelijk";
                                break;
                        }
                        var view = "Test";


                        return (
                            <tr key={grade.id}>
                                <td>{grade.exam.course.name}</td>
                                <td>{grade.grade}</td>
                                <td>{passed}</td>
                                <td>{type}</td>
                                <td>{grade.exam.course.ects}</td>
                                <td>{view}</td>
                            </tr>
                        );
                    })
                }
                </tbody>
            </Table>
        )
    }
}