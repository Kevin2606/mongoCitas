import { Router } from "express";
import { CitaController } from "../controllers/citas.js";

const router = Router();

router
//Obtener todas las citas alfabéticamente
.get("/", CitaController.getAll)
//Encontrar la próxima cita para un paciente específico (por ejemplo, el paciente con **usu_id 1**):
.get("/paciente/:id", (req, res) => {
    res.send("Encontrar la próxima cita para un paciente específico (por ejemplo, el paciente con **usu_id 1**):");
})
// Encontrar todos los pacientes que tienen citas con un médico específico (por ejemplo, el médico con **med_nroMatriculaProsional 1**)
.get("/medico/:id", (req, res) => {
    res.send("Encontrar todos los pacientes que tienen citas con un médico específico (por ejemplo, el médico con **med_nroMatriculaProsional 1**)");
})
//Encontrar todas las citas para un día específico (por ejemplo, **'2023-07-12'**)
.get("/fecha/:fecha", (req, res) => {
    res.send("Encontrar todas las citas para un día específico (por ejemplo, **'2023-07-12'**)");
})
//Obtener todas las citas realizadas por los pacientes de un genero si su estado de la cita fue atendidad
.get("/genero/:genero", (req, res) => {
    res.send("Obtener todas las citas realizadas por los pacientes de un genero si su estado de la cita fue atendidad");
})
//Mostrar todas las citas que fueron rechazadas y en un mes específico, mostrar la fecha de la cita, el nombre del usuario y el médico.
.get("/rechazadas/:mes", (req, res) => {
    res.send("Mostrar todas las citas que fueron rechazadas y en un mes específico, mostrar la fecha de la cita, el nombre del usuario y el médico.");
})

export default router;