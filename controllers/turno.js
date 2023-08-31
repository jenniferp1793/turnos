/* class TurnoController {
    constructor(model) {
        this.model = model;
    }
    agregarTurno(nombre) {
        this.model.agregarTurno(nombre);
    }

    obtenerTurnos() {
        return this.model.obtenerTurnos();
    }
    tomarTurno(id, escritorio) {
        this.model.tomarTurno(id, escritorio);
    }
} */
// controllers/TurnoController.js
class TurnoController {
    constructor(model) {
        this.model = model;
    }

    agregarTurno(nombre) {
        this.model.agregarTurno(nombre);
    }

    obtenerTurnos() {
        return this.model.obtenerTurnos();
    }
}
