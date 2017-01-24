import React from 'react'
import Panel from 'react-bootstrap/lib/Panel';
import Col from 'react-bootstrap/lib/Col';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import StudentTable from '../controls/RegisterGrade/StudentTable';

export default React.createClass ({

    getInitialState() {
        return {
            programsLoaded: false,
            groupsLoaded: false,
            usersLoaded: false,
            coursesLoaded: false
        }
    },

    componentDidMount() {
        fetch('http://localhost:8080/studyprogram').then((response) => {
            response.json().then((data) => {
                this.setState({
                    programsLoaded: true,
                    programs: data,
                    groupsLoaded: false,
                    usersLoaded: false,
                    coursesLoaded: false
                });
            });
        });
    },

    renderProgramSelector() {
        if (this.state.programsLoaded) {

            var options = [];

            this.state.programs.map((program) => {
                var option =
                    <option value={program.id} key={program.id}>{program.name}</option>;

                options.push(option);
            });

            return (
                <FormGroup controlId="formControlsSelect">
                    <ControlLabel>Studie</ControlLabel>
                    <FormControl componentClass="select" placeholder="select" onChange={this.handleStudySelectorChange}>
                        <option>Selecteer een studie</option>
                        {options}
                    </FormControl>
                </FormGroup>
            );
        }
        else {
            return (
                <FormGroup controlId="formControlsSelect">
                    <ControlLabel>Studie</ControlLabel>
                    <FormControl componentClass="select" placeholder="select" disabled>
                        <option value="">Laden...</option>
                    </FormControl>
                </FormGroup>
            );
        }
    },

    renderGroupSelector() {
        if (this.state.groupsLoaded) {

            var options = [];

            this.state.groups.map((group) => {
                var option =
                    <option value={group.id} key={group.id}>{this.state.selectedProgram.groupPrefix + group.id}</option>;

                options.push(option);
            });

            return (
                <FormGroup controlId="formControlsSelect">
                    <ControlLabel>Groep/Klas</ControlLabel>
                    <FormControl componentClass="select" placeholder="select" onChange={this.handleGroupSelectorChange}>
                        <option>Selecteer een groep</option>
                        {options}
                    </FormControl>
                </FormGroup>
            );
        }
        else {
            return (
                <FormGroup controlId="formControlsSelect">
                    <ControlLabel>Groep/Klas</ControlLabel>
                    <FormControl componentClass="select" placeholder="select" disabled>
                        <option value="">Selecteer eerst een studie</option>
                    </FormControl>
                </FormGroup>
            );
        }
    },

    renderCourseSelector() {
        if (this.state.coursesLoaded) {
            var options = [];

            this.state.courses.map((course) => {
                var option =
                    <option value={course.id} key={course.id}>{course.name}</option>;

                options.push(option);
            });

            return (
                <FormGroup controlId="formControlsSelect">
                    <ControlLabel>Vak</ControlLabel>
                    <FormControl componentClass="select" placeholder="select" onChange={this.handleCourseSelectorChange}>
                        <option>Selecteer een vak</option>
                        {options}
                    </FormControl>
                </FormGroup>
            );
        }
        else {
            return (
                <FormGroup controlId="formControlsSelect">
                    <ControlLabel>Vak</ControlLabel>
                    <FormControl componentClass="select" placeholder="select" disabled>
                        <option value="">Selecteer eerst een groep</option>
                    </FormControl>
                </FormGroup>
            );
        }
    },

    renderStudentTable() {
        console.log('table', this.state);
        if (this.state.usersLoaded) {
            return (
                <Panel>
                    <StudentTable users={this.state.users}/>
                </Panel>
            );
        }
        else {
            return (
                <Panel>

                </Panel>
            )
        }
    },

    handleStudySelectorChange(event) {
        event.persist();
        fetch('http://localhost:8080/studyprogram/' + event.target.value + '/groups').then((response) => {
            response.json().then((data) => {
                var programData = this.state.programs;
                var selectedProgram;
                programData.map((program) => {
                    if (program.id == event.target.value) {
                        selectedProgram = program;
                    }
                });
                this.setState({
                    programsLoaded: true,
                    programs: programData,
                    selectedProgram: selectedProgram,
                    groupsLoaded: true,
                    groups: data,
                    usersLoaded: false,
                    coursesLoaded: false
                });
            });
        });
    },

    handleGroupSelectorChange(event) {
        event.persist();
        fetch('http://localhost:8080/group/' + event.target.value).then((response) => {
            response.json().then((data) => {
                var groupData = this.state.groups;
                var programData = this.state.programs;
                var selectedProgram = this.state.selectedProgram;

                var selectedGroup;

                groupData.map((group) => {
                    if (group.id == event.target.value) {
                        selectedGroup = group;
                    }
                });
                this.setState({
                    programsLoaded: true,
                    programs: programData,
                    selectedProgram: selectedProgram,
                    groupsLoaded: true,
                    groups: groupData,
                    selectedGroup: selectedGroup,
                    usersLoaded: false,
                    coursesLoaded: true,
                    courses: data.study_program.courses
                });
            });
        });
    },

    handleCourseSelectorChange(event) {
        event.persist();

        var previousState = this.state;
        fetch('http://localhost:8080/group/' + previousState.selectedGroup.id + '/users').then((response) => {
            response.json().then((data) => {
                var selectedCourse;
                var courseData = previousState.courses;

                courseData.map((course) => {
                    if (course.id == event.target.value) {
                        selectedCourse = course;
                    }
                });

                console.log('shit gets here');

                this.setState({
                    programsLoaded: true,
                    programs: previousState.programs,
                    selectedProgram: previousState.selectedProgram,
                    groupsLoaded: true,
                    groups: previousState.groups,
                    selectedGroup: previousState.selectedGroup,
                    usersLoaded: true,
                    users: data,
                    coursesLoaded: true,
                    courses: previousState.courses,
                    selectedCourse: selectedCourse
                });
            });
        });
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
                        {this.renderGroupSelector()}
                    </Col>
                    <Col xs={6} md={4}>
                        {this.renderCourseSelector()}
                    </Col>
                </Panel>
                {this.renderStudentTable()}
            </div>
        )
    }
});