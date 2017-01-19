/**
 * Created by Joshua on 20-12-2016.
 */
import React from "react";
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Button from 'react-bootstrap/lib/Button';

export default class StudyPlanningTable extends React.Component {
grade ={};

    constructor(props)
    {
        super(props);
        this.parseGrade();
        console.log(this.props);
    }

    parseGrade() {

        this.grade.grade = this.props.grade;

        if (this.props.passed == 1)
        {
            this.grade.passed = "Ja";
        }
        else {
            this.grade.passed = "Nee";
        }

        switch(this.grade.gradeType)
        {
            case "PRACTICAL":
                this.grade.type = "Praktisch";
                break;
            case "REGULAR":
            default:
                this.grade.type = "Schriftelijk";
                break;
        }
    }

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
                    <ControlLabel>{this.grade.passed}</ControlLabel>
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
                    <ControlLabel>Semester 7</ControlLabel>
                    <FormControl disabled componentClass="select" placeholder="select">
                        <option value="select">Richting Specifieke Themasemester</option>
                    </FormControl>
                    <ControlLabel>Semester 8</ControlLabel>
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
