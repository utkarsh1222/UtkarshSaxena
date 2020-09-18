import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const Navbar = () =>{
    return(
        <>
        <div className='container-fluid nav_bg sticky-top'>
            <div className='row'>
                <div className='col-10 mx-auto'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink exact className="navbar-brand" to="/">
  <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-code-slash mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0zm-.999-3.124a.5.5 0 0 1 .33.625l-4 13a.5.5 0 0 1-.955-.294l4-13a.5.5 0 0 1 .625-.33z"/>
</svg> 
       Utkarsh Saxena
      </NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <NavLink activeClassName='menu_active' exact className="nav-link" to="/">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName='menu_active' exact className="nav-link" to='/about'>About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName='menu_active' exact className="nav-link" to='/contact'>Contact</NavLink>
      </li>
      <li className="nav-item">
        <a activeClassName='menu_active' exact className="nav-link" href='http://utkarshsaxena.in/' target='_blank'>Blog</a>
      </li>
    </ul>
  </div>
</nav>
</div>
            </div>
        </div>
        </>
    )
}

export default Navbar;