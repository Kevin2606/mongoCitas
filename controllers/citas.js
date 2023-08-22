import { CitaModel } from "../models/cita";
export class CitaController {
    static getAll(req, res) {
        res.json(CitaModel.getAll())
    }
}