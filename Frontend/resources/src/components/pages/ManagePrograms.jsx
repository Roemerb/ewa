import React from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import Table from 'react-bootstrap/lib/Table';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';

export default React.createClass ({

    getInitialState() {
        return {
            programsLoaded: false,
            modalOpen: false
        }
    },

    openModal(program) {
        var previousState = this.state;

        fetch('http://localhost:8080/studyprogram/' + program.id + '/courses').then((response) => {
            response.json().then((data) => {
                this.setState({
                    programsLoaded: previousState.programsLoaded,
                    programs: previousState.programs,
                    modalOpen: true,
                    program: program,
                    courses: data
                });
            })
        });
    },

    refreshCourses() {
        var previousState = this.state;

        fetch('http://localhost:8080/studyprogram/' + previousState.program.id + '/courses').then((response) => {
            response.json().then((data) => {
                this.setState({
                    programsLoaded: previousState.programsLoaded,
                    programs: previousState.programs,
                    modalOpen: previousState.modalOpen,
                    program: previousState.program,
                    courses: data
                });
            })
        });
    },

    closeModal() {
        var previousState = this.state;

        this.setState({
            programsLoaded: previousState.programsLoaded,
            programs: previousState.programs,
            modalOpen: false
        })
    },

    componentDidMount() {
        fetch('http://localhost:8080/studyprogram').then((response) => {
            response.json().then((data) => {
                this.setState({
                    programsLoaded: true,
                    programs: data
                });
            });
        });
    },

    refreshPrograms() {
        fetch('http://localhost:8080/studyprogram').then((response) => {
            response.json().then((data) => {
                this.setState({
                    programsLoaded: true,
                    programs: data
                });
            });
        });
    },

    renderTableRows() {
        var rows = [];

        this.state.programs.map((program) => {
            var row =
                <tr key={'program_' + program.id}>
                    <td>{program.name}</td>
                    <td>{program.durationYears}</td>
                    <td>{program.groupPrefix}</td>
                    <td><Button bsStyle='danger' onClick={this.deleteProgram.bind(null, program)}>Verwijder</Button></td>
                    <td><Button bsStyle='success' onClick={this.openModal.bind(null, program)}>Bewerk</Button></td>
                </tr>

            rows.push(row);
        });

        return rows;
    },

    renderModalContent() {
        if (this.state.program == undefined || this.state.courses == undefined) {
            return (
                <div></div>
            )
        }
        else {
            return (
                <div>
                    <form>
                        <h3>Voeg nieuw vak toe</h3>

                        <ControlLabel>Naam</ControlLabel>
                        <FormControl id="courseName" type="text" />

                        <ControlLabel>Type</ControlLabel>
                        <FormControl componentClass="select" placeholder="select" id="type">
                            <option value="regular">Regulair</option>
                            <option value="project">Project</option>
                        </FormControl>

                        <ControlLabel>Aantal ECTS</ControlLabel>
                        <FormGroup>
                            <FormControl id="ects" type="number" step="1" min="1" />
                        </FormGroup>

                        <ControlLabel>Semester</ControlLabel>
                        <FormGroup>
                            <FormControl id="semester" type="number" step="1" min="1" max={this.state.program.durationYears * 2} />
                        </FormGroup>

                        <Button bsStyle="success" onClick={this.saveCourse}>Opslaan</Button>
                    </form>

                    <Table striped bordered condensed hover >
                        <thead>
                        <tr>
                            <th>Semester</th>
                            <th>Naam</th>
                            <th>ECTS</th>
                            <th>Type</th>
                            <th>Verwijderen</th>
                        </tr>
                        </thead>
                        <tbody>
                            {this.renderCourseRows()}
                        </tbody>
                    </Table>
                </div>
            )
        }
    },

    saveCourse() {
        var name = $('#courseName').val();
        var semester = $('#semester').val();
        var type = $('#type').val();
        var ects = $('#ects').val();

        fetch('http://localhost:8080/course?program_id=' + this.state.program.id, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                semester: semester,
                type: type,
                ects: ects
            })
        }).then((response) => {
            this.refreshCourses();
        })
    },

    saveProgram() {
        var name = $('#programName').val();
        var groupPrefix = $('#groupPrefix').val();
        var durationYears = $('#durationYears').val();

        fetch('http://localhost:8080/studyprogram', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                groupPrefix: groupPrefix,
                durationYears: durationYears
            })
        }).then((response) => {
            this.refreshPrograms();
        })
    },

    renderCourseRows() {
        var rows = [];

        this.state.courses.map((course) => {

            switch(course.type) { // Parse the course type
                case 'project':
                case 'PROJECT':
                    type = 'Project';
                    break;
                case 'regular':
                case 'REGULAR':
                default:
                    var type = 'Regulair';
                    break;
            }

            var row =
                <tr key={'course_' + course.id}>
                    <td>{course.semester}</td>
                    <td>{course.name}</td>
                    <td>{course.ects}</td>
                    <td>{type}</td>
                    <td><Button bsStyle="danger" onClick={this.deleteCourse.bind(null, course)}>Verwijder</Button></td>
                </tr>;

            rows.push(row);
        });

        return rows;
    },

    deleteCourse(course) {
        if (confirm('Weet u zeker dat u dit vak wilt verwijderen?')) {
            fetch('http://localhost:8080/course/' + course.id + '/delete', {
                method: 'DELETE'
            }).then((response) => {
                this.refreshCourses();
            });
        }
    },

    deleteProgram(program) {
        if (confirm('Weet u zeker dat u deze studie wilt verwijderen?')) {
            fetch('http://localhost:8080/studyprogram/' + program.id + '/delete', {
                method: 'DELETE'
            }).then((response) => {
                this.refreshPrograms();
            })
        }
    },

    render() {
        if (this.state.programsLoaded) {

            if (this.state.program == undefined) {
                var name = '';
            }
            else {
                var name = this.state.program.name;
            }

            return (
                <div>
                    <h1>Beheer Studies</h1>
                    <Panel>

                        <form>
                            <h3>Maak een nieuwe Studie aan</h3>

                            <ControlLabel>Naam</ControlLabel>
                            <FormControl id="programName" type="text" />

                            <ControlLabel>Lengte in jaren</ControlLabel>
                            <FormGroup>
                                <FormControl id="durationYears" type="number" step="1" min="1" />
                            </FormGroup>

                            <ControlLabel>Groepen prefix</ControlLabel>
                            <FormControl id="groupPrefix" type="text" />

                            <Button bsStyle="success" onClick={this.saveProgram}>Opslaan</Button>
                        </form>

                        <Table striped bordered condensed hover>
                            <thead>
                            <tr>
                                <th>Naam</th>
                                <th>Lengte in jaren</th>
                                <th>Groep Prefix</th>
                                <th>Verwijderen</th>
                                <th>Bewerken</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.renderTableRows()}
                            </tbody>
                        </Table>
                    </Panel>

                    <Modal show={this.state.modalOpen} onHide={this.closeModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>{name}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {this.renderModalContent()}
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.closeModal}>Sluiten</Button>
                        </Modal.Footer>
                    </Modal>
                </div>

            )
        }
        else {
            return (

                <div>
                    <h1>Beheer Studies</h1>
                    <p1>Laden...</p1>
                </div>
            );
        }
    }
});