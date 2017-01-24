import React from 'react';
import Table from 'react-bootstrap/lib/Table';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';

export default class StudentTable extends React.Component {

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
                        <FormGroup controlId={'userObj_' + userObj.id}>
                            <FormControl
                                controlId={'userObj_' + userObj.id}
                                type="text"
                            />
                        </FormGroup>
                    </td>
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