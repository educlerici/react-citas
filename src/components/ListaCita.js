import React, { Component } from "react";

import Cita from "./Cita";

class ListaCita extends Component {
  render() {
    const citas = this.props.citas;
    const mensaje =
      Object.keys(citas).length === 0
        ? "No hay citas"
        : "Administra tus citas aqui";

    return (
      <div className="row card justify-content-center">
        <div className="card-title py-1 px-1">
          <h2>{mensaje}</h2>
        </div>
        <div className="card-body">
          {Object.keys(this.props.citas).map(cita => (
            <Cita
              key={cita}
              idCita={cita}
              info={this.props.citas[cita]}
              borrarCita={this.props.borrarCita}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ListaCita;
