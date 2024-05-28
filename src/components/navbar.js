import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

export default function Navbar(){
    return (
        
            <nav class="navbar navbar-expand-sm navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">ReactSafe</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="mynavbar">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">Contact</a>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
        
    );
}