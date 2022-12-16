import React, {Component, useEffect, useState} from 'react';
import { Table } from 'react-bootstrap';

export const Therapists = () => {
    const [therapists, setTherapists] = useState([]);

    const refreshList = () => {
        fetch(process.env.REACT_APP_API+'psycotherapists')
        .then(response=>response.json())
        .then(data=>{
            setTherapists(data);
        }).catch(error => {
            alert("Error: " + error);
        });
        console.log(therapists);
    }

    useEffect(() => {
        refreshList();
      }, []);

        return(
        <div>
            <Table className='mt-4' striped bordered hover size="sm">
                <thead>
                    <th>TherapistId</th>
                    <th>Name</th>
                    <th>Address</th>
                </thead>    
                <tbody>
                    {therapists.map(the=>
                        <tr key={the.id}>
                            <td>{the.id}</td>
                            <td>{the.name}</td>
                            <td>{the.address}</td>
                            </tr>)}
                    </tbody>
                </Table>
        </div>
    );
}