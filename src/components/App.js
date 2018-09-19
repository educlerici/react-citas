import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

import Header from "./Header";
import AgregarCita from "./AgregarCita";
import ListaCita from "./ListaCita";

class App extends Component {
  state = {
    citas: {}
  };

  componentDidMount() {
    const citasLS = localStorage.getItem("citas");
    if (citasLS) {
      this.setState({
        citas: JSON.parse(citasLS)
      });
    }
  }

  componentDidUpdate() {
    localStorage.setItem("citas", JSON.stringify(this.state.citas));
  }

  nuevaCita = infoCita => {
    const citas = { ...this.state.citas };

    citas[`citas${Date.now()}`] = infoCita;

    this.setState({
      citas
    });
  };

  borrarCita = id => {
    //console.log("borrando.. " + id);
    // leer el state
    const citas = { ...this.state.citas };
    // borrar elemento del state
    delete citas[id];
    // actualizar state
    this.setState({ citas });
  };

  render() {
    return (
      <div className="bg-red">
        <Header titulo="Citas" />
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <AgregarCita nuevaCita={this.nuevaCita} />
            </div>
            <div className="col-md-6">
              <ListaCita
                citas={this.state.citas}
                borrarCita={this.borrarCita}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
