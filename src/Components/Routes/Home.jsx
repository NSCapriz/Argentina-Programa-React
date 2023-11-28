import React from "react";
import "../../assets/css/home.css";
import Card from "../Content/Card";

import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className="hero">
                <a className="hero-link">
                    <NavLink to="/nosotros">CONOCENOS</NavLink>
                </a>
                <p>
                    " Descubre el poder de la excelencia en marketing con
                    nuestra empresa, líder con una extensa trayectoria en el
                    campo. Cada campaña es una narrativa de éxito, respaldada
                    por años de experiencia y creatividad. Desde estrategias
                    innovadoras hasta resultados tangibles, hemos marcado la
                    pauta en la industria. Con nosotros, no solo obtienes
                    servicios, sino un viaje emocionante hacia el reconocimiento
                    y el crecimiento. ¡Atrévete a explorar nuestro legado y
                    lleva tu marca más allá de las expectativas! "
                </p>
            </div>
            <Card />
        </>
    );
};

export default Home;
