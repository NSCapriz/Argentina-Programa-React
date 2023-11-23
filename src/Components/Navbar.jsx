import React from "react";
import { useState } from "react";
//Importación para el Router Dom
import { NavLink } from 'react-router-dom'

//Importaciones de imagenes para la Navbar
import logo from "../assets/img/barra-navegación.png" //Ejemplo 
import Menu from "../assets/img/menu-hamburguesa.png" // Ejemplo para el menu hamburguesa

const Navbar = () => {
    const [menu, setMenu] = useState(false);
  
    const toggleMenu = () => {
      setMenu(!menu);
    };
  
    return (
      <div className="container_navbar">
        <div className="container_navbar--logo">
            <img src={ logo } alt="Logo" />
            <p>NavBar</p>
        </div>
        <div className={`container_navbar--links ${menu ? 'open' : ''}`}>
            <button onClick={toggleMenu} ><img src={ Menu } alt="menu" /></button>
            <ul className={`nav-list ${menu ? 'show' : ''}`}>
                <li> <NavLink to='/' className={'nav-link'}>Inicio</NavLink> </li>
                <li><NavLink to='/nosotros' className={'nav-link'}>Nosotros</NavLink> </li>
                <li><NavLink to='/contacto' className={'nav-link'}>Contacto</NavLink> </li>
            </ul>
        </div>
      </div>
    );
  };

export default Navbar
