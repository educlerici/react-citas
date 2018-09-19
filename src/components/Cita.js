import React, { Component } from "react";

class Cita extends Component {
  render() {
    const { fecha, hora, mascota, propietario, sintomas } = this.props.info;
    return (
      <div className="row mx-1 my-1">
        <p>
          <b className="my-1">Mascota:</b> {mascota}
          <b className="my-1">Propietario:</b> {propietario} <br />
          <b>Fecha:</b> {fecha} <br />
          <b>Hora:</b> {hora} <br />
          <b>Sintomas:</b> {sintomas} <br />
          <button
            onClick={() => {
              this.props.borrarCita(this.props.idCita);
            }}
            className="btn btn-danger btn-sm"
          >
            Borrar X
          </button>
        </p>
      </div>
    );
  }
}

export default Cita;
