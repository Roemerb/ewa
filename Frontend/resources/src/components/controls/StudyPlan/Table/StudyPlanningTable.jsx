/**
 * Created by Joshua on 20-12-2016.
 */
import React from "react";
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Button from 'react-bootstrap/lib/Button';

export default class StudyPlanningTable extends React.Component {

    render() {
        function FieldGroup({ id, label, help, ...props }) {
            return (
                <FormGroup controlId={id}>
                    <ControlLabel>{label}</ControlLabel>
                    <FormControl {...props} />
                    {help && <HelpBlock>{help}</HelpBlock>}
                </FormGroup>
            );
        }
        return (
            <div>
            <form>
                <FormGroup controlId="formControlsSelect">
                    <ControlLabel>Semester 1 t/m 3</ControlLabel>
                    <FormControl disabled componentClass="select" placeholder="select">
                        <option value="select">Basisfase</option>
                    </FormControl>
                    <ControlLabel>Semester 4</ControlLabel>
                    <FormControl componentClass="select" placeholder="select">
                        <option value="select">Stage</option>
                        <option value="ThemaSemester" disabled>ThemaSemesters :</option>
                        <option value="ThemaSemester">Big Data</option>
                        <option value="ThemaSemester">Creative Startups</option>
                        <option value="ThemaSemester">Internet of Things</option>
                        <option value="ThemaSemester">Mobile Development</option>
                        <option value="ThemaSemester">Security</option>
                    </FormControl>
                    <ControlLabel>Semester 5</ControlLabel>
                    <FormControl componentClass="select" placeholder="select">
                        <option value="select">Stage</option>
                        <option value="ThemaSemester" disabled>ThemaSemesters :</option>
                        <option value="ThemaSemester">Big Data</option>
                        <option value="ThemaSemester">Creative Startups</option>
                        <option value="ThemaSemester">Internet of Things</option>
                        <option value="ThemaSemester">Mobile Development</option>
                        <option value="ThemaSemester">Security</option>
                    </FormControl>
                    <FieldGroup
                        id="formControlsText"
                        type="text"
                        label="Semester 6"
                        placeholder="Jouw Minor keuze"
                    />
                    <ControlLabel>Semester 1 t/m 3</ControlLabel>
                    <FormControl disabled componentClass="select" placeholder="select">
                        <option value="select">Richting Specifieke Themasemester</option>
                    </FormControl>
                    <ControlLabel>Semester 1 t/m 3</ControlLabel>
                    <FormControl disabled componentClass="select" placeholder="select">
                        <option value="select">AfstudeerFase</option>
                    </FormControl>
                </FormGroup>

                <Button type="submit">
                    Update StudyPlanning
                </Button>

            </form>
            </div>

        );
    }
}
