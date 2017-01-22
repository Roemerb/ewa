import React from 'react'
import Panel from 'react-bootstrap/lib/Panel';
import Col from 'react-bootstrap/lib/Col';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel'

export default React.createClass ({

    getInitialState() {
        return {
            programsLoaded: false,
            programs: null,
        }
    },

    componentDidMount() {
        fetch('localhost:8080/studyprogram').then((response) => {

        });
    },

    render () {
        if (this.state.programsLoaded) {

        }
        else {

        }
        return (
            <Col xs={6} md={4}>
                <FormGroup controlId="formControlsSelect">
                    <ControlLabel>Select</ControlLabel>
                    <FormControl componentClass="select" placeholder="select">
                        <option value="select">select</option>
                        <option value="other">...</option>
                    </FormControl>
                </FormGroup>
            </Col>
        )
    }
});