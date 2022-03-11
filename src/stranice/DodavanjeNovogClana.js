import React from 'react'
import {Form, Container, Button, FloatingLabel} from "react-bootstrap"

function DodavanjeNovogClana() {
  return (
<>
<h2>Dodavanje novog člana</h2>
<br/>
<Container>
  <FloatingLabel
    controlId="imeKorisnika"
    label="Ime"
    className="mb-2"
  >
    <Form.Control type="ime" z placeholder="name@example.com" />
  </FloatingLabel>
  <FloatingLabel controlId="prezime" label="Prezime">
    <Form.Control type="prezime" placeholder="prezme" />
  </FloatingLabel>
    <br/>
  <FloatingLabel controlId="floatingPassword" label="e-mail">
    <Form.Control type="email" placeholder="email" />
  </FloatingLabel>
    <br/>
  <FloatingLabel controlId="tipClanstva" label="Tip članstva">

  <Form.Select aria-label="Floating label select example">
    <option>Odaberite...</option>
    <option value="vatrogasac">Vatrogasac</option>
    <option value="bezIspita">Bez ispita / novi</option>

    <option value="mladez">Mladež</option>
    <option value="starijiOd65">Stariji od 65</option>
    <option value="podupiruciClan">Podupirući član</option>
  </Form.Select>
</FloatingLabel>
 <br/>
<Button type="primary">Spremi</Button>
</Container>
</>  )
}

export default DodavanjeNovogClana