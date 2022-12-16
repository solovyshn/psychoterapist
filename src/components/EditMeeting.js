import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form, ModalTitle} from 'react-bootstrap';

export const EditMeeting = () => {
    // handleSubmit = this.handleSubmit.bind(this);

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(process.env.REACT_APP_API + 'meetings/' + event.target.meetingId.value,
        {
            method: 'PUT',
            headers:{
                'Accept':'application/json',
                'Content-type':'application/json',
            },
            body: JSON.stringify({
                name:event.target.name.value,
                description:event.target.desc.value,
                firstMeeting:event.target.date.value,
                frequencyTime:parseInt(event.target.frequency.value),
                psycotherapistId:parseInt(event.target.therapistId.value)
            })
        } )
        .then(res=>res.json())
        .then((result)=>{
            alert("Updated successfully");
        },
        (error)=>{
            alert('Failed');
        })
    }

        return(
            <div>
                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    >
                        <Modal.Header closeButton>
                            <ModalTitle id="contained-modal-title-vcenter">
                                Edit Meeting
                            </ModalTitle>
                        </Modal.Header>
                        <Modal.Body>
                            <Row>
                                <Col sm={6}>
                                    <Form onSubmit={this.handleSubmit}>
                                        <Form.Group controlId='meetingId'>
                                            <Form.Label>Id</Form.Label>
                                            <Form.Control type="text" name="meetingId" required disabled defaultValue={this.props.id} placeholder='id'/>
                                        </Form.Group>
                                        <Form.Group controlId='name'>
                                            <Form.Label>Line Name</Form.Label>
                                            <Form.Control type="text" name="name" required defaultValue={this.props.name} placeholder='name'/>
                                        </Form.Group>
                                        <Form.Group controlId='description'>
                                            <Form.Label>Garage Address</Form.Label>
                                            <Form.Control type="text" name="description" required defaultValue={this.props.description} placeholder='description'/>
                                        </Form.Group>
                                        <Form.Group controlId='firstMeeting'>
                                            <Form.Label>Category</Form.Label>
                                            <Form.Control type="text" name="firstMeeting" required defaultValue={this.props.firstMeeting} placeholder='firstMeeting'/>
                                        </Form.Group>
                                        <Form.Group controlId='frequencyTime'>
                                            <Form.Label>Max Size</Form.Label>
                                            <Form.Control type="number" name="frequencyTime" required defaultValue={this.props.frequencyTime} placeholder='frequencyTime'/>
                                        </Form.Group>
                                        <Form.Group controlId='psycotherapistId'>
                                            <Form.Label>Max Size</Form.Label>
                                            <Form.Control type="number" name="psycotherapistId" required defaultValue={this.props.psycotherapistId} placeholder='psycotherapistId'/>
                                        </Form.Group>
                                        <Form.Group>
                                            <Button variant="primary" type="submit">
                                                Update Vehicle
                                            </Button>
                                        </Form.Group>
                                    </Form>
                                </Col>
                            </Row>

                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="danger" onClick={this.props.onHide}>Close</Button>
                        </Modal.Footer>
                </Modal>
            </div>
        )
        
    }
