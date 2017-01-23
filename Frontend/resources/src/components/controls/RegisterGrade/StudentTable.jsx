import React from 'react';
import Table from 'react-bootstrap/lib/Table';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';

export default class StudentTable extends React.Component {

    renderTableRows() {
        var rows = [];

        for(var user in this.props.users)
        {
            var row =
                <tr>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
                    <td>{user.hvaId}</td>
                    <td>{user.hvaId}</td>
                    <td>
                        <FormGroup controlId={'user_' + user.id}>
                            <FormControl
                                controlId={'user_' + user.id}
                                type="text"
                            />
                        </FormGroup>
                    </td>
                </tr>
        }
    }

    render() {
        console.log('Hello!');
        return (
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
        )
    }

}