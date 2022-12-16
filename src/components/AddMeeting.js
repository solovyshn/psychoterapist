import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form, ModalTitle} from 'react-bootstrap';

export class AddMeeting extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API + 'meetings',
        {
            method: 'POST',
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
            // alert(result);
        },
        (error)=>{
            alert('Failed');
        })
    }

    render(){
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
                                Add Meeting
                            </ModalTitle>
                        </Modal.Header>
                        <Modal.Body>
                            <Row>
                                <Col sm={6}>
                                    <Form onSubmit={this.handleSubmit}>
                                        <Form.Group controlId='name'>
                                            <Form.Label>Line Name</Form.Label>
                                            <Form.Control type="text" name="name" required placeholder='name'/>
                                        </Form.Group>
                                        <Form.Group controlId='description'>
                                            <Form.Label>Garage Address</Form.Label>
                                            <Form.Control type="text" name="description" required placeholder='description'/>
                                        </Form.Group>
                                        <Form.Group controlId='firstMeeting'>
                                            <Form.Label>Category</Form.Label>
                                            <Form.Control type="text" name="firstMeeting" required placeholder='firstMeeting'/>
                                        </Form.Group>
                                        <Form.Group controlId='frequencyTime'>
                                            <Form.Label>Max Size</Form.Label>
                                            <Form.Control type="number" name="frequencyTime" required placeholder='frequencyTime'/>
                                        </Form.Group>
                                        <Form.Group controlId='psycotherapistId'>
                                            <Form.Label>Max Size</Form.Label>
                                            <Form.Control type="number" name="psycotherapistId" required placeholder='psycotherapistId'/>
                                        </Form.Group>
                                        <Form.Group>
                                            <Button variant="primary" type="submit">
                                                Add Vehicle
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
}