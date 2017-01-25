import React from 'react';
import Table from 'react-bootstrap/lib/Table';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import Panel from 'react-bootstrap/lib/Panel';
import Button from 'react-bootstrap/lib/Button';

export default class StudentTable extends React.Component {

    constructor(props) {
        super(props);

        this.submitGrades = this.submitGrades.bind(this);
    }

    renderTableRows() {
        var rows = [];

        for(var user in this.props.users)
        {
            var userObj = this.props.users[user];
            var row =
                <tr key={'userObj_' + userObj.id}>
                    <td>{userObj.firstName}</td>
                    <td>{userObj.lastName}</td>
                    <td>{userObj.email}</td>
                    <td>{userObj.hvaId}</td>
                    <td>
                        <FormGroup controlId={'user' + userObj.id}>
                            <FormControl id={'userGrade_' + userObj.id} type="text" />
                        </FormGroup>
                    </td>
                </tr>

            rows.push(row);
        }

        return rows;
    }

    parseExamType(type) {
        switch(type) {
            case 'regular':
            case 'REGULAR':
                return 'Tentamen';
                break;
            default:
                return 'Hertentamen';
        }
    }

    submitGrades() {
        var grades = [];

        this.props.users.map((user) => {
            var grade = {};
            grades[user.id] = $('#userGrade_' + user.id).val();
        });

        grades.map(grade)
    }

    render() {
        return (
            <Panel>
                <p>Cijfers voor het {this.parseExamType(this.props.exam.type)} van {this.props.course.name}</p>
                <Table striped bordered condensed hover>
                    <thead>
                    <tr>
                        <th>Voornaam</th>
                        <th>Achternaam</th>
                        <th>Email adres</th>
                        <th>HvA ID</th>
                        <th>Cijfer</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderTableRows()}
                    </tbody>
                </Table>
                <Button bsStyle="success" onClick={this.submitGrades}>Opslaan</Button>
            </Panel>
        )
    }

}