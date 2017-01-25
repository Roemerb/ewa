/**
 * Created by Joshua on 20-12-2016.
 */
import React from "react";
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Button from 'react-bootstrap/lib/Button';

export default class StudyPlanningTable extends React.Component {
planning ={};

    constructor(props)
    {
        super(props);
        this.parsePlanning();
        console.log(this.props);
    }

    /**
     * Parse and structure all the data fetched from the api.
     */
    parsePlanning() {

        this.planning.semester4 = this.props.semester4;
        this.planning.semester5 = this.props.semester5;
        this.planning.minor = this.props.minor;

        if (this.props.accepted == "true")
        {
            this.planning.accepted = "Ja";
        } else {
            this.planning.accepted = "Nee";
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
                    <ControlLabel>Semester 1 t/m 3</ControlLabel>
                    <FormControl disabled componentClass="select" placeholder="select">
                        <option value="select">Basisfase</option>
                    </FormControl>
                    <ControlLabel>Semester 4</ControlLabel>
                    <FormControl id="semester4" value={this.props.planning.semester4} componentClass="select" placeholder="select">
                        <option value="select">{this.planning.semester4}</option>
                        <option value="internship">Stage</option>
                        <option value="ThemaSemester" disabled>ThemaSemesters :</option>
                        <option value="ts_big_data">Big Data</option>
                        <option value="ts_creative_startup">Creative Startups</option>
                        <option value="ts_internet_of_things">Internet of Things</option>
                        <option value="ts_mobile_development">Mobile Development</option>
                        <option value="ts_security">Security</option>
                    </FormControl>
                    <ControlLabel>Semester 5</ControlLabel>
                    <FormControl id="semester5" value={this.props.planning.semester5} componentClass="select" placeholder="select">
                        <option value="select">{this.planning.semester5}</option>
                        <option value="internship">Stage</option>
                        <option value="ThemaSemester" disabled>ThemaSemesters :</option>
                        <option value="ts_big_data">Big Data</option>
                        <option value="ts_creative_startup">Creative Startups</option>
                        <option value="ts_internet_of_things">Internet of Things</option>
                        <option value="ts_mobile_development">Mobile Development</option>
                        <option value="ts_security">Security</option>
                    </FormControl>
                    <FieldGroup
                        id="minor"
                        type="text"
                        label="Semester 6"
                        value={this.props.planning.minor}
                        placeholder={this.planning.minor}
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

                <Button bsStyle="success" onClick={this.saveStuddyPlanning}>Opslaan</Button>

            </form>
            </div>

        );
    }
}
