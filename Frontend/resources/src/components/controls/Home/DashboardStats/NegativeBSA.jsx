import React from 'react';
import Alert from 'react-bootstrap/lib/Alert';

export default class NegativeBSA extends React.Component {

    remaining() {
        return 50 - this.props.received;
    }

    render() {
        return (
            <Alert bsStyle="danger">
                <p>
                    WAARSCHUWING: Je moet dit jaar nog minstens {this.remaining()} punten halen.
                    Anders krijg je een negatief BSA.
                </p>
            </Alert>
        )
    }
}