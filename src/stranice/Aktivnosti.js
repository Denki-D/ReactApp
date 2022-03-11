import React from 'react'
import { Container, Table } from 'react-bootstrap'

function Aktivnosti() {
  return (
    <Container>
<h1>Aktivnosti</h1>
<br/>
<Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>#</th>
      <th>Datum</th>
      <th>Vrsta aktivnosti</th>
      <th>Broj sudionika</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      {{aktivnost}}
    </tr>

  </tbody>
</Table>


    </Container>
  )
}

export default Aktivnosti