import React, { Component } from "react";

class AgregarCita extends Component {
  state = {};

  mascotaRef = React.createRef();
  propietarioRef = React.createRef();
  fechaRef = React.createRef();
  horaRef = React.createRef();
  sintomasRef = React.createRef();

  crearNuevaCita = e => {
    e.preventDefault();

    const nuevaCita = {
      mascota: this.mascotaRef.current.value,
      propietario: this.propietarioRef.current.value,
      fecha: this.fechaRef.current.value,
      hora: this.horaRef.current.value,
      sintomas: this.sintomasRef.current.value
    };

    this.props.nuevaCita(nuevaCita);

    e.currentTarget.reset();
  };

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h2 className="card-title text-center mb-5">Agrega las citas aqui</h2>
          <form onSubmit={this.crearNuevaCita}>
            <div className="row">
              <div className="col-sm-8 form-group">
                <label className="col-form-label">Nombre Mascota</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Mascota"
                  ref={this.mascotaRef}
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-sm-8 col-lg-10">
                <label className="col-form-label">Nombre Dueño</label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Dueño de la Mascota"
                  ref={this.propietarioRef}
                />
              </div>
            </div>

            <div className="row">
              <div className="form-group col-sm-8 col-lg-4  mb-4 mb-lg-0">
                <label className="col-form-label">Fecha</label>

                <input
                  type="date"
                  className="form-control"
                  ref={this.fechaRef}
                />
              </div>

              <div className="col-sm-8 col-lg-4">
                <label className="col-form-label">Hora</label>

                <input
                  type="time"
                  className="form-control"
                  ref={this.horaRef}
                />
              </div>
            </div>

            <div className="form-group row">
              <div className="col-sm-8 col-lg-10">
                <label className="col-form-label">Sintomas</label>

                <textarea className="form-control" ref={this.sintomasRef} />
              </div>
            </div>
            <div className="form-group row justify-content-end">
              <div className="col-sm-12">
                <button type="submit" className="btn btn-success w-100">
                  Agregar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AgregarCita;
