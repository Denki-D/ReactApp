import React from 'react'
import { Container, Form, FloatingLabel} from 'react-bootstrap'

function NovaAktivnost() {
  return (
    <Container>
     <h1>Upis aktivnosti</h1>
     <Form>
     <Form.Group>
  <FloatingLabel
    controlId="odbirDatumaRucni"
    label="Datum"
    className="mb-3"
  >
    <Form.Control type="date" value="datumAktivnosti"/>
  </FloatingLabel>
  <FloatingLabel controlId="floatingPassword" label="Početak aktivnosti" value="vrijemePocetkaAktivnosti">
    <Form.Control type="time"/>
      <FloatingLabel controlId="floatingPassword" label="Završetak aktivnosti" value="vrijemeZavrsetkaAktivnosti">
    <Form.Control type="time"/>
  </FloatingLabel>
  </FloatingLabel>
</Form.Group>
<FloatingLabel controlId="opisAktivnosti" label="Opis aktivnosti" className="mb-3">
    <Form.Control as="textarea" placeholder="Ovdje upišite kratak opis aktivnosti" />
  </FloatingLabel> 
     <FloatingLabel controlId="izbornikOdabirAktivnosti" label="Vrsta aktivnosti">
  <Form.Select aria-label="Floating label select example">
    <option>Izaberite vrstu aktivnosti</option>
    <option value="intervencija">Intervencija</option>
    <option value="sastanak">Redoviti sastanak</option>
    <option value="vjezba">Vježba</option>
    <option value="dezurstvo">Dežurstvo</option>
    <option value="administracija">Administracija</option>
      <option value="edukacija">Edukacija</option>
        <option value="ronjenje">Ronjenje</option>
          <option value="ostalo">Ostalo</option>
  </Form.Select>
</FloatingLabel>
<Form.Group>
  {['checkbox'].map((type) => (
    <div key={`default-${type}`} className="mb-3">
      <Form.Check 
        type={type}
        id={`default-${type}`}
        label={`default ${type}`}
      />
    </div>
  ))}
</Form.Group>
  <Button variant="primary" type="submit">
    Unesi aktivnost
  </Button>
</Form>
    </Container>
  )
}

export default NovaAktivnost