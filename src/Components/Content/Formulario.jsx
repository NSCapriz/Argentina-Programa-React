import React, { useState } from "react";
import "../../assets/css/contact.css";
import Swal from 'sweetalert2'

const Formulario = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [edad, setEdad] = useState("");
    const [consulta, setConsulta] = useState("");
    const [errorEnviar, setErrorEnviar] = useState(false);

    const errorMensaje = validacionDatos(nombre, apellido, email, edad, consulta);

    const manejarEnvio = (evento) => {
        evento.preventDefault();
        if (!errorMensaje) {
            Swal.fire("¡ Consulta enviada !");
            Swal.update({
                icon: 'success'
            });
            setNombre("");
            setApellido("");
            setEmail("");
            setEdad("");
            setConsulta("");
            setErrorEnviar(false);
        } else {
            setErrorEnviar(true);
        }
    };

    return (
        <form onSubmit={manejarEnvio}>
            <div className="label-input-container">
                <label htmlFor="nombre">Nombre: </label>
                <input
                    id="nombre"
                    type="text"
                    onChange={(evento) => setNombre(evento.target.value)}
                    value={nombre}
                    autoComplete="off"
                    name="nombre"
                    placeholder="Escriba su nombre..."
                />
            </div>
            <div className="label-input-container">
                <label htmlFor="apellido">Apellido: </label>
                <input
                    id="apellido"
                    type="text"
                    onChange={(evento) => setApellido(evento.target.value)}
                    value={apellido}
                    autoComplete="off"
                    name="apellido"
                    placeholder="Escriba su apellido..."
                />
            </div>
            <div className="label-input-container">
                <label htmlFor="email">Email: </label>
                <input
                    id="email"
                    type="text"
                    onChange={(evento) => setEmail(evento.target.value)}
                    value={email}
                    autoComplete="off"
                    name="email"
                    placeholder="Escriba su email..."
                />
            </div>
            <div className="label-input-container">
                <label htmlFor="edad">Edad: </label>
                <input
                    id="edad"
                    type="number"
                    onChange={(evento) => setEdad(evento.target.value)}
                    value={edad}
                    autoComplete="off"
                    name="edad"
                    placeholder="Escriba su edad..."
                />
            </div>
            <div className="label-input-container">
                <label htmlFor="consulta">Consulta: </label>
                <textarea 
                name="" 
                id="" 
                cols="30" 
                rows="10"
                onChange={(evento) => setConsulta(evento.target.value)}
                value={consulta}
                autoComplete="off"
                placeholder="Escriba su consulta..."
                >
                </textarea>
            </div>
            <div className="button ">
                <button type="submit" disabled={!!errorMensaje}>
                    Enviar
                </button>
            </div>
        </form>
    );
};

const validacionDatos = (nombre, apellido, email, edad, consulta) => {
    if (nombre === "") return "Por favor, ingrese su nombre";
    if (apellido === "") return "Por favor, ingrese su apellido";
    if (!email.includes("@")) return "Por favor, ingrese un mail válido";
    if (edad === "") return "Por favor, ingrese su edad";
    if (consulta === "") return "Por favor, ingrese su consulta";
    return null;
};

export default Formulario;
