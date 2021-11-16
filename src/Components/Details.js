import React,{useState,useEffect} from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';

export default function Details() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3003/enquiry").then((res) => {
            setData(res.data)
        })
    }, [])


    return (
        <div>
             <Table striped bordered hover>
             <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                </tr>
            </thead>
            {
                data.map(det=>
           
                
                <tbody>
                    <tr>
                        <td>{det.Name}</td>
                        <td>{det.Phone}</td>
                        <td>{det.Email}</td>
                        <td>{det.enquiry}</td>
                    </tr>
                </tbody>
            )
        }
        </Table>
        </div>
    )
}
