import React from 'react';
import Table from 'react-bootstrap/lib/Table';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import Panel from 'react-bootstrap/lib/Panel';
import Button from 'react-bootstrap/lib/Button';
import Alert from 'react-bootstrap/lib/Alert';

export default class StudentTable extends React.Component {

    constructor(props) {
        super(props);

        this.state = {showSuccess: false};

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
                            <FormControl id={'userGrade_' + userObj.id} type="number" step="0.1" min="0.1" />
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
            grades[user.id] = $('#userGrade_' + user.id).val();
        });

        for(var userId in grades) {
            $('#userGrade_' + userId).attr('disabled', 'disabled');
            var grade = grades[userId];

            var floatGrade = parseFloat(grade);

            var passed = (floatGrade >= 5.5) ? 1 : 0;

            fetch('http://localhost:8080/grade/create?user_id=' + userId + '&exam_id=' + this.props.exam.id, {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({
                    "grade": floatGrade.toString(),
                    "passed": passed,
                    "gradeType": "REGULAR"
                })
            }).then((response) => {
                response.json().then((data) => {
                    console.log('The new grade: ', data);
                })
            })

            this.setState({
                showSuccess: true
            });
        }
    }

    renderAlert() {
        if (this.state.showSuccess)
        {
            return (
                <Alert bsStyle="success">
                    De cijfers zijn succesvol opgeslagen.
                </Alert>
            );
        }
        else {
            return (
                <div></div>
            )
        }
    }


    render() {
        return (
            <Panel>
                {this.renderAlert()}
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