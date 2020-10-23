import React from 'react'
import {Form, Button, Col} from 'react-bootstrap'

class Signup extends React.Component {
    constructor(){
        super()
        this.state={
            name: '',
            email: '',
            password: ''
        }
    }

    handleOnChange = e => {
        const {value, name} = e.target
        this.setState({
            [name]: value
        })
    }

    handleOnSubmit = e => {
        e.preventDefault()
        if(this.props.signup(this.state)){
            window.alert('Thank you for signing up')
        } else {
            window.alert('Try signing up again!')
        }
    }

    render(){
        return(
            <div>
                <Form className='signup-form' onSubmit='handleOnSubmit'>
                    <Form.Group as={Col} md='4' controlId='formGridName'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control name='name' onChange={this.handleOnChange} type='text' placeholder='Enter your name' value={this.state.name} />
                    </Form.Group>
                    <Form.Group as={Col} md='4' controlId='formGridEmail'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control name='email' onChange={this.handleOnChange} type='email' placeholder='Enter your email' value={this.state.email} />
                    </Form.Group>
                    <Form.Group as={Col} md='4' controlId='formGridPassword'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' onChange={this.handleOnChange} type='password' placeholder='Password' value={this.state.password} />
                    </Form.Group>
                    <Button className='signup-btn' variant='primary' type='submit'>
                        Sign Up
                    </Button>
                </Form>
            </div>
        )
    }
}

export default Signup