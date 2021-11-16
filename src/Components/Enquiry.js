import React, { useState ,useEffect,useHistory} from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Enquiry() {
    const [state, setState] = useState({
        array: [],
        flag:0
    })
   
    const navigate  = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:3002/courses").then((res) => {
            setState({ array: res.data })
            console.log(res.data)
        })
    }, [])

    const add=()=>{
        navigate('/forms');
    }
    return (
        <div>
            {
                state.array.map(course =>
                    <Card className="mx-5 my-3" style={{ width: '21rem', display:"inline-block"}}>
                        <Card.Img variant="top"height='280px' width="300px" src={course.imgsrc} />
                        <Card.Body>
                            <Card.Title>{course.name}</Card.Title>
                            <Card.Text>
                               {course.body}
                            </Card.Text>
                            <Button variant="primary" onClick={add}>Enquiry</Button>
                        </Card.Body>
                    </Card>
                )
            }
            {/* {state.flag==1 && <Redirect to="/Forms.js"></Redirect>} */}
        </div>
    )
}
