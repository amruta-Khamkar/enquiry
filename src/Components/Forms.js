import React ,{useRef}from 'react'
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

export default function Forms() {
    const Name = useRef(null)
    const Phone = useRef(null)
    const Email = useRef(null)
    const enquiry = useRef(null)
    const course = useRef(null)

    const addEnquiry = () => {
        if (Name.current.value == '' || Email.current.value == '' || Phone.current.value == '' || enquiry.current.value == '') {
            alert("Please fill all fields")
        }
        else {
            let formData = { Name: Name.current.value, Phone: Phone.current.value, Email: Email.current.value, enquiry: enquiry.current.value};

            axios.post(`http://localhost:3003/enquiry`, formData);
            alert("We have got your enquiry we will contact you soon")
            Name.current.value=''
            Phone.current.value=''
            Email.current.value=''
            enquiry.current.value=''
        }

    }
    return (
           <div className="container ">
            <h1 className="text-center">Enquiry form</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="email" placeholder="Your Beautiful Name" ref={Name} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhoneNo">
                    <Form.Label>Phone No </Form.Label>
                    <Form.Control type="email" placeholder="Contact Number Please" ref={Phone} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" ref={Email} />
                </Form.Group>

                
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Enter your Enquiry</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Enter Your Enquiry" ref={enquiry} />
                </Form.Group>
                <Button variant="success btn-sm" onClick={() => addEnquiry()}>Submit</Button>

              </Form>
        </div>
    )
}
