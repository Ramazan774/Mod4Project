import React from 'react'
import { Form, Button, Col } from 'react-bootstrap'

class Login extends React.Component {
    constructor(){
        super()
        this.state={
            username: '',
            password: ''
        }
    }

    render(){
        <div>
            <Form className='login-form' onSubmit='handleOnSubmit'>
                <Form.Group as={Col} md='4' controlId='formGridEmail'>
                    <Form.Label>Username</Form.Label>
                    <Form.Control name='username' onChange={this.handleOnChange} type='username' placeholder='Enter username' value={this.state.username} />
                </Form.Group>
                <Form.Group as={Col} md='4' controlId='formGridPassword'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' onChange={this.handleOnChange} type='password' placeholder='Password' value={this.state.password} />
                </Form.Group>
                <Button className='login-btn' variant='primary' type='submit'>
                    Login
                </Button>
            </Form>
        </div>
    }
}

export default Login