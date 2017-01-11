import React from "react";
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';
import GradeDetailModalTable from '../GradeDetailModalTable';

export default class GradeDetailModal extends React.Component
{
    endpoint = "/grade";

    grade = {};

    constructor(props) {
        super(props);

        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);

        this.state = {
            open: false
        };

        console.log('GRADE:');
        console.log(this.props);
    }

    closeModal() {
        this.setState({open: false});
    }

    openModal() {
        this.setState({open: true});
    }

    render() {
        return (
            <p>
                <Button onClick={this.openModal}>Details</Button>
                <Modal show={this.state.open} onHide={this.closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Cijfer voor {this.props.grade.exam.course.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <GradeDetailModalTable grade={this.props.grade}/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.closeModal}>Sluiten</Button>
                    </Modal.Footer>
                </Modal>
            </p>
        )
    }

}
