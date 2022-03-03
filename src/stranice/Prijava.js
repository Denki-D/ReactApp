import React from 'react'
import {From, Button, Card} from 'react-bootstrap'
import { useRef, useState } from 'react'
import {useAuth} from "../contexts/AuthContext"

export default function PrijaviKorisnika() {
const emailRef = useRef()
const passwordRef= useRef()
const {PrijaviKorisnika}= useAuth()
function PrihvatiPrijavu() {

  e.preventDefault();


  PrijaviKorisnika(emailRef.current.value, passwordRef.current.value)

}
  return (
<Card>
  <Card.Body>
    <div className="container">
    <h1>Prijava</h1>
    <input type="text" placeholder='korisničko ime' className='form-control' ref={emailRef} /><br/>
    <input type="password" placeholder='lozinka' className='form-control' ref={passwordRef} /><br/>
    <button className='btn btn-primary'>Prijava</button>
    </div>
     </Card.Body>
    </Card>
  )

}
//export default Prijava;