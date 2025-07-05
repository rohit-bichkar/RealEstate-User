import React from 'react'
import { useState } from 'react';
import { createProperties } from '../API/api';
import { LogOutApi } from '../API/api';
import { Form,Container,Button } from 'react-bootstrap';
import { ToastContainer,toast } from 'react-toastify';
import marthaStewart from '../assets/MarthaStewart.png'
import { useNavigate } from 'react-router-dom';

const InquiryFrom = () => {
    const[name,setName] = useState('');
    const[email,setEmail] = useState('')
    const[phone,setPhone] = useState('');
    const[message,setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit =async(e)=>{
        e.preventDefault();
         const inquiryData = {
        name,
        email,
        phone: phone, // or phoneno if you use that state
        message
    };

    try {
        const response = await createProperties(inquiryData)
        if (response?.success) {
                   toast.success('Form submitted, You will get a Call from us!');
                   setName('');
                   setEmail('');
                   setPhone('');
                   setMessage('');
               } else {
                   toast.error(response?.message || 'Error submitting form');
               }
    } catch (error) {
         console.error('Error submitting inquiry:', error);
        toast.error('Something went wrong. Please try again.');
    }
    }

    const logout = async()=>{
        try {
            await LogOutApi();
        } catch (error) {
            console.log(error)
        }
        localStorage.removeItem("token");
        navigate('/login');
    }
  return (
    <Container className=" bg-light shadow p-4" style={{ maxWidth: '400px',marginTop: '2%', borderRadius: '15px' }}>
     <p className='fs-3 border-bottom'>Submit an Inquiry</p>
      <Form onSubmit={handleSubmit} >
        <p className='fs-4'>Property Consultant</p>
        <div>
            <img src={marthaStewart}></img>
            <p className='text-secondary'>Martha Stewart</p>
        </div>
        

      <Form.Group controlId="formName" className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="John Doe" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="john@gamil.com" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formPhoneNumber" className="mb-3">
          <Form.Label>Phone (Optional)</Form.Label>
          <Form.Control
            type="number"
            placeholder="+1 (123) 456-0509"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formMessage" className="mb-3">
  <Form.Label>Message</Form.Label>
  <Form.Control
    as="textarea"
    rows={3}
    placeholder="Type your message here"
    value={message}
    onChange={(e) => setMessage(e.target.value)}
    required
  />
</Form.Group>

        <Button variant="primary" type="submit"  className="w-100">
          Submit
        </Button>
         <Button variant="secondary" type="submit"  className="w-100 mt-3" onClick={logout}>
          Logout
        </Button>
      </Form>
      <ToastContainer/>
    </Container>
  )
}

export default InquiryFrom
