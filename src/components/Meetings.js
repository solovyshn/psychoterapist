import React, {Component, useEffect, useState} from 'react';
import { Table } from 'react-bootstrap';
import {Button, ButtonToolbar} from 'react-bootstrap';
import {EditMeeting} from './EditMeeting';
import { AddMeeting } from './AddMeeting';

export const Meetings = () =>  {
    const [meetings, setMeetings] = useState([]);
    const [editModalShow, setEditModalShow] = useState([]);
    const [addModalShow, setAddModalShow] = useState([]);
    let [id, name, description, firstMeeting, frequencyTime, psycotherapistId] = [null];
    let editModalClose=()=>this.setEditModalShow({editModalShow:false});
    const refreshList = () => {
        fetch(process.env.REACT_APP_API+'meetings')
        .then(response=>response.json())
        .then(data=>{
            setMeetings(data);
        }).catch(error => {
            alert("Error: " + error);
        });
        console.log(meetings);
    }

    useEffect(() => {
        refreshList();
      }, []);

      const deleteMet = (id) => {
        if(window.confirm('Do you agree to delete element with id ' + id + '?')){
            fetch(process.env.REACT_APP_API + 'meetings/' + id,{
                method:"DELETE",
                header:{
                    'Accept:':'application/json',
                    'Content-Type':'application/json',
                }
            })
        }
    }

    const handleChange = () => {
        let word = document.getElementById('searchword').value;
        console.log(process.env.REACT_APP_API+'meetings/'+word);
        fetch(process.env.REACT_APP_API+'meetings/find/'+word)
        .then(response=>response.json())
        .then(data=>{
            setMeetings(data);
        }).catch(error => {
            alert("Error: " + error);
        });
    }

    const addMeeting = () => {
        setAddModalShow(true);
    }

        return(
        <div>
            <section className="garamond">
                <div className="navy georgia ma0 grow">
                    <h2 className="f2">Search your meeting</h2>
                </div>
                <div className="pa2">
                    <input 
                        className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
                        id="searchword"
                        type = "search" 
                        placeholder = "Search..." 
                    />
                    <Button onClick={handleChange}>Click</Button>
                    <Button onClick={addMeeting}>Add</Button>
                </div>
            </section>
            <Table className='mt-4' striped bordered hover size="sm">
                <thead>
                    <th>MeetingId</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Date</th>
                    <th>Frequency</th>
                    <th>Therapist</th>
                    <th>Options</th>
                </thead>    
                <tbody>
                    {meetings.map(met=>
                        <tr key={met.id}>
                            <td>{met.id}</td>
                            <td>{met.name}</td>
                            <td>{met.description}</td>
                            <td>{met.firstMeeting}</td>
                            <td>{met.frequencyTime}</td>
                            <td>{met.psycotherapistId}</td>
                            <td>
                                     <ButtonToolbar>
                                        
                                        <Button className="mr-2" variant="danger" 
                                            onClick={()=>deleteMet(met.id)}
                                            >Delete</Button>

                                    </ButtonToolbar> 
                                </td>
                            </tr>)}
                    </tbody>
                </Table>
                <AddMeeting show={this.addModalShow}/>
                {/* <ButtonToolbar>
                    <Button variant='primary' onClick={}>
                        Add Meeting
                    </Button>
                </ButtonToolbar> */}
        </div>
    );

}