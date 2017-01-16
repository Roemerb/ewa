import React from 'react';
import Button from 'react-bootstrap/lib/Button'
import Modal from 'react-bootstrap/lib/Modal'
import DetailModalContent from './DetailModalContent';

export default React.createClass ({

    getInitialState() {
        return {
            examsLoaded: false,
            modalOpen: false
        }
    },

    componentDidMount() {
        fetch('http://localhost:8080/course/' + this.props.course.id + '/exams').then((examResp) => {
            examResp.json().then((examData) => {
                this.exams = examData;

                this.setState({
                    examsLoaded: true,
                    modalOpen: false
                });
            });
        });
    },

    openModal() {
        this.setState({
            examsLoaded: true,
            modalOpen: true
        })
    },

    closeModal() {
        this.setState({
            examsLoaded: true,
            modalOpen: false
        })
    },

    render() {
        if (this.state.examsLoaded) {
            return (
                <div>
                    <Button onClick={this.openModal}>Details</Button>
                    <Modal show={this.state.modalOpen} onHide={this.closeModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>{this.props.course.name}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <DetailModalContent course={this.props.course} exams={this.exams}/>
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
                <div>Laden...</div>
            )
        }
    }
})