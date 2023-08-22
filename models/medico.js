import connect from "../config/connectDB.js";
const db = await connect();

export class MedicoModel {
    static async getAll(especialidad) {
        try {
            if (isNaN(especialidad)) return {status: 400, message: "Especialidad debe ser un número"};
            return await db.collection('medicos').find({med_especialidad: parseInt(especialidad)}).toArray();
        } catch (error) {
            return {status: 500, message: error};
        }
    }
    static async getConsultorios() {
        try {
            return await db.collection('medicos').find({}).project({med_consultorio: 1, med_nombreCompleto: 1, _id: 0}).toArray();
        } catch (error) {
            return {status: 500, message: error};
        }
    }
    static async getCitas(id, fecha) {
        try {
            if (isNaN(id)) return {status: 400, message: "Id debe ser un número"};
            if (isNaN(Date.parse(fecha))) return {status: 400, message: "Fecha debe ser una fecha"};
            return await db.collection('citas').find({cit_medico: parseInt(id), cit_fecha: new Date(fecha)}).toArray();
        } catch (error) {
            return {status: 500, message: error};
        }
    }
}