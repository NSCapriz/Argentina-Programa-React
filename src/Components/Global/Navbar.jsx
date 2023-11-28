import React from "react";
import { useState } from "react";
import '../../assets/css/navbar.css'
//Importación para el Router Dom
import { NavLink } from "react-router-dom";

//Importaciones de imagenes para la Navbar
import logo from "../../assets/img/logo-agencia.png"; //Ejemplo
import Menu from "../../assets/img/menu-hamburguesa.png"; // Ejemplo para el menu hamburguesa

const Navbar = () => {
    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(!menu);
    };

    return (
        <div className="container_navbar">
            <div className="container_navbar--logo">
            <NavLink to="/">
                <img src={logo} alt="Logo"/>
                </NavLink>{" "}
            </div>
            <div className={`container_navbar--links ${menu ? "open" : ""}`}>
                <button onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                    </svg>
                </button>
                <ul className={`nav-list ${menu ? "show" : ""}`}>
                    <li>
                        {" "}
                        <NavLink to="/" className={"nav-link"}>
                            INICIO
                        </NavLink>{" "}
                    </li>
                    <li>
                        <NavLink to="/nosotros" className={"nav-link"}>
                            NOSOTROS
                        </NavLink>{" "}
                    </li>
                    <li>
                        <NavLink to="/servicios" className={"nav-link"}>
                            SERVICIOS
                        </NavLink>{" "}
                    </li>
                    <li>
                        <NavLink to="/contacto" className={"nav-link"}>
                            CONTACTO
                        </NavLink>{" "}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
