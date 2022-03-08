//import { Alert } from 'bootstrap'
import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'


export default function Signup() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const {signup}= useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {

        e.preventDefault()

        if (passwordRef.current.value !==
            passwordRef.current.value) {
            return setError('Lozinke se ne podudaraju')
        }

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)

        } catch {
            setError('Neuspješno kreiran račun.')
        }
        setLoading(false)
    }

    return (
        <Card>
            <Card.Body>
                <h2 className='text-center mb-4' Registriraj se></h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id='email'>
                        <Form.Label>e-mail</Form.Label>
                        <Form.Control type='email' required ref={emailRef} />
                    </Form.Group>
                    <Form.Group id='password'>
                        <Form.Label>lozinka</Form.Label>
                        <Form.Control type='password' required ref={passwordRef} />
                    </Form.Group>
                    <Form.Group id='password-confirm'>
                        <Form.Label>Ponovi lozinku</Form.Label>
                        <Form.Control type='password' required ref={passwordConfirmRef} />
                    </Form.Group>
                    <Button disabled={loading} className='w-100' 
                    type='submit'>Registriraj me</Button>
                </Form>
            </Card.Body>
            <div className='w-100 text-center mt-2'>
                Već imate račun? Prijavite se!
            </div>
        </Card>
    )
}
