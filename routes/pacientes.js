import { Router } from "express";
import { PacienteController } from "../controllers/pacientes.js";

const router = Router();
router
//Obtener todos los pacientes alfabeticamente
.get("/", (req, res) => {
    res.send("Obtener todos los pacientes alfabeticamente");
})
//Obtener los consultorio donde se aplicó las citas de un paciente
.get("/consultorios/:id", (req, res) => {
    res.send("Obtener los consultorio donde se aplicó las citas de un paciente");
})
//TODO: Insertar un paciente a la tabla usuario pero si es menor de edad solicitar primero que ingrese el acudiente y validar si ya estaba registrado el acudiente.
.post("/", (req, res) => {
    res.send("Insertar un paciente a la tabla usuario pero si es menor de edad solicitar primero que ingrese el acudiente y validar si ya estaba registrado el acudiente.");
})

export default router;