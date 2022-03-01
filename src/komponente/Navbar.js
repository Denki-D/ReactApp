import React from 'react';
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#" className='#naslovnica'>Probna verzija</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#">Aktivnosti <span class="sr-only"></span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Nova aktivnost</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled me" href="#">Članovi</a>
      </li>
      <li class="nav-item">
        <a class="nav-link .ml-auto" href="#">Prijava</a>
      </li>
    </ul>
  </div>
</nav>
    </div>
  )
}

export default Navbar;