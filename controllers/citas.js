import { CitaModel } from "../models/cita.js";
export class CitaController {
    static async getAll(req, res) {
        res.json(await CitaModel.getAll())
    }
    static async getByPaciente(req, res) {
        const result = await CitaModel.getByPaciente(req.params.id)
        if (result.status) return res.status(result.status).json({message: result.message})
        res.json(result);
    }
    static async getByMedico(req, res) {
        const result = await CitaModel.getByMedico(req.params.id)
        if (result.status) return res.status(result.status).json({message: result.message})
        res.json(result);
    }
    static async getByFecha(req, res) {
        const result = await CitaModel.getByFecha(req.params.fecha)
        if (result.status) return res.status(result.status).json({message: result.message})
        res.json(result);
    }

    static async getByGenero(req, res) {
        const result = await CitaModel.getByGenero(req.params.genero)
        if (result.status) return res.status(result.status).json({message: result.message})
        res.json(result);
    }

    static async getRechazadas(req, res) {
        const result = await CitaModel.getRechazadas(req.params.mes)
        if (result.status) return res.status(result.status).json({message: result.message})
        res.json(result);
    }
}