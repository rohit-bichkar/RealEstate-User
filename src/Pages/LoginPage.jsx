import React, { useState } from 'react'
import { loginApi } from '../API/api'
import { toast ,ToastContainer} from 'react-toastify'
import { Form,Container,Button } from 'react-bootstrap'
import loginpageBg from '../assets/loginpageBG.jpeg'
import { Link, useLocation, useNavigate } from 'react-router-dom'


const LoginPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const[error,setError] = useState('')

    const handleFormSubmit = async(e)=>{
        e.preventDefault();
        setError('')
        try {
            const response = await loginApi({email,password})
            console.log(response)
            if(response.message){
                toast.success(response.message)
                localStorage.setItem('isLoggedIn', 'true')
                const redirectTo = location.state?.from || '/'
                 setTimeout(() => {
                    navigate(redirectTo, { replace: true })
                }, 1000) 
            }else{
            setError("login failed. please check your credentials.")

            }
        } catch (error) {
             setError(error.response?.data?.message );
        }
    }
  return (
    <>
    <div style={{backgroundImage: `url(${loginpageBg})` ,height:'100vh',backgroundSize: 'cover', display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'}}>
    <Container className=" shadow p-4 " style={{ maxWidth: '400px', borderRadius: '15px' ,backgroundColor:'whitesmoke' }}>
      <h2 className="text-center mb-4">Agent Login</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleFormSubmit}>
        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formPassword" className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit"  className="w-100">
          Login
        </Button>
      </Form>
      <p className='mt-3'>Are you new? <Link to='/register' className='text-black'>create an account</Link></p>
    </Container>
    <ToastContainer></ToastContainer>
    </div>
    </>
  )
}

export default LoginPage
