import React from 'react';
import Alert from 'react-bootstrap/lib/Alert';

export default class PositiveBSA extends React.Component {
    render() {
        return (
            <Alert bsStyle="success">
                <p>
                    Gefeliciteerd! Met het aantal punten wat je hebt behaald krijg je een positief BSA.
                </p>
            </Alert>
        )
    }
}