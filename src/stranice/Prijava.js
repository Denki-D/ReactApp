import React from 'react'

function Prijava() {
  return (
    <div className="container">
    <h1>Prijava</h1>
    <input type="text" placeholder='korisničko ime' className='form-control' /><br/>
    <input type="password" placeholder='lozinka' className='form-control' /><br/>
    <button className='btn btn-primary'>Prijava</button>
    </div> 
  )
}

export default Prijava;