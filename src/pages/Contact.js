import React from 'react';
import { useState, useEffect } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

import './Contact.css';

export const Contact = () => {


    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

        console.log(firstName);
        console.log(lastName);
        console.log(email);
        console.log(message);

    
 useEffect(() => {

   var value = [firstName, lastName, email, message]
  // storing input name
  localStorage.setItem("formKey", JSON.stringify(value));
}, []);


  const submitForm = (event) => {
    event.preventDefault();
  }






    return (
            <section className='contact' id='contact'>
            <div className='section-title'>
                <h2>Contact</h2>
            </div>
            <Container className='d-flex justify-content-center flex-wrap-wrap mt-5 card-flex m-auto mb-4 align-items-center'>
        <Form onSubmit={submitForm} className="w-100" >
            <h1>Contact Me!</h1>
            <input type="firstName" value={firstName} className="form-control mb-3" placeholder="firstName" required 
                onChange={event => setFirstName(event.target.value.trim())}
            />  
            <input type="lastName" value={lastName} className="form-control mb-3" placeholder="lastName" required 
                onChange={event => setLastName(event.target.value.trim())}
            />                         
            <input type="email" value={email} className="form-control mb-3" placeholder="Email" required 
                onChange={event => setEmail(event.target.value.trim())}
            />
            <textarea type="message" value={message} className="form-control mb-3" rows="3" placeholder="Message" required 
                onChange={event => setMessage(event.target.value.trim())}
            />
            <Button className="btn btn-outline-dark text-white" type="submit">Contact Me</Button>
        </Form>
        </Container>
        </section>
    );

    }


  