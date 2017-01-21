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
            groupsLoaded: false,
            usersLoaded: false
        }
    },

    componentDidMount() {
        fetch('http://localhost:8080/studyprogram').then((response) => {
            response.json().then((data) => {
                this.setState({
                    programsLoaded: true,
                    programs: data,
                    groupsLoaded: false,
                    usersLoaded: false
                });
            });
        });
    },

    renderProgramSelector() {
        if (this.state.programsLoaded) {

            var options = [];

            this.state.programs.map((program) => {
                var option =
                    <option value={program.id} key={program.id}>{program.name}</option>

                options.push(option);
            });

            return (
                <FormGroup controlId="formControlsSelect">
                    <ControlLabel>Select</ControlLabel>
                    <FormControl componentClass="select" placeholder="select">
                        <option>Selecteer een studie</option>
                        {options}
                    </FormControl>
                </FormGroup>
            );
        }
        else {
            return (
                <FormGroup controlId="formControlsSelect">
                    <ControlLabel>Select</ControlLabel>
                    <FormControl componentClass="select" placeholder="select" disabled>
                        <option value="">Laden...</option>
                    </FormControl>
                </FormGroup>
            );
        }
    },

    render () {
        return (
            <div>
                <div className="push-20"> </div>
                <h1 className="title">Registreer nieuwe cijfers</h1>
                <Panel header="Studie en groep selectie">
                    <Col xs={6} md={4}>
                        {this.renderProgramSelector()}
                    </Col>
                    <Col xs={6} md={4}>
                        <p>Column 2</p>
                    </Col>
                    <Col xs={6} md={4}>
                        <p>Column 3</p>
                    </Col>
                </Panel>
            </div>
        )
    }
});