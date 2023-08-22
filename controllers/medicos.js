import { MedicoModel } from "../models/medico.js";

export class MedicoController {
    static async getAll(req, res) {
        const result = await MedicoModel.getAll(req.params.especialidad)
        if (result.status) return res.status(result.status).json({message: result.message})
        res.json(result);
    }
    static async getConsultorios(req, res) {
        const result = await MedicoModel.getConsultorios()
        if (result.status) return res.status(result.status).json({message: result.message})
        res.json(result);
    }
    static async getCitas(req, res) {
        const result = await MedicoModel.getCitas(req.params.id, req.params.fecha)
        if (result.status) return res.status(result.status).json({message: result.message})
        res.json(result);
    }
}