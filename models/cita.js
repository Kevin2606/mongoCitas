import connect from "../config/connectDB.js";

const db = await connect();

export class CitaModel {
    static async  getAll() {
        return await db.collection("citas").find().sort({ "cit_fecha": 1 }).toArray();
    }
    static async getByPaciente(id) {
        try {
            if (isNaN(id)) throw new Error("El id debe ser un número");
            return await db.collection("citas").find({ "cit_datosUsuario": parseInt(id) }).sort({ "cit_fecha": 1 }).toArray();
        }catch (error) {
            return { status: 400, message: error.message };
        }
    }

    static async getByMedico(id) {
        try {
            if (isNaN(id)) throw new Error("El id debe ser un número");
            return await db.collection("citas").find({ "cit_medico": parseInt(id) }).sort({ "cit_fecha": 1 }).toArray();
        }catch (error) {
            return { status: 400, message: error.message };
        }
    }

    static async getByFecha(fecha) {
        try {
            if(new Date(fecha) == "Invalid Date") throw new Error("La fecha debe ser válida");
            return await db.collection("citas").find({ "cit_fecha": new Date(fecha) }).sort({ "cit_fecha": 1 }).toArray();
        }catch (error) {
            return { status: 400, message: error.message };
        }
    }

    static async getByGenero(genero) {
        try {
            if (genero != "1" && genero != "2") throw new Error("El género debe ser masculino o femenino");
            const result = db.collection("citas").aggregate([
                {
                  $lookup: {
                    from: "usuarios",
                    localField: "cit_datosUsuario",
                    foreignField: "usu_id",
                    as: "usuario"
                  }
                },
                {
                  $unwind: "$usuario"
                },
                {
                  $match: {
                    "usuario.usu_genero": (genero == "1") ? 1 : 2, // Cambiar 1 por el valor correspondiente al género deseado
                    cit_estadoCita: 2 // Cambiar 1 por el valor correspondiente al estado "atendida"
                  }
                },
                {
                  $project: {
                    _id: 0,
                    cita: "$$ROOT"
                  }
                }
              ]);
            return await result.toArray() ;
        }catch (error) {
            return { status: 400, message: error.message };
        }
    }

    static async getRechazadas(mes) {
        try {
            if (isNaN(mes)) throw new Error("El mes debe ser un número");
            if (mes < 1 || mes > 12) throw new Error("El mes debe ser un número entre 1 y 12");
            const result = db.collection("citas").aggregate([
                {
                  $lookup: {
                    from: "usuarios",
                    localField: "cit_datosUsuario",
                    foreignField: "usu_id",
                    as: "usuario"
                  }
                },
                {
                  $unwind: "$usuario"
                },
                {
                  $lookup: {
                    from: "medicos",
                    localField: "cit_medico",
                    foreignField: "med_nroMatriculaProfesional",
                    as: "medico"
                  }
                },
                {
                  $unwind: "$medico"
                },
                {
                  $match: {
                    cit_estadoCita: 3, // Cambiar 1 por el valor correspondiente al estado "rechazada"
                    "cit_fecha": {
                      $gte: new Date("2023-" + mes + "-01"),
                      $lt: new Date("2023-" + mes + "-31")
                    }
                  }
                },
                {
                  $project: {
                    _id: 0,
                    cit_fecha: 1,
                    "usuario.usu_nombre": 1,
                    "medico.med_nombreCompleto": 1
                  }
                }
              ]);
            return await result.toArray();
        }catch (error) {
            return { status: 400, message: error.message };
        }
    }

}