import { Router } from 'express';
import { MedicoController } from '../controllers/medicos.js';

const router = Router();
router
//Obtener todos los médicos de una especialidad específica (por ejemplo, **'Cardiología'**):
.get('/', (req, res) => {
    res.send("Obtener todos los médicos de una especialidad específica (por ejemplo, **'Cardiología'**):")
}) 
//Obtener los médicos y sus consultorios
.get('/consultorios', (req, res) => {
    res.send("Obtener los médicos y sus consultorios")
})
//Contar el número de citas que un médico tiene en un día específico (por ejemplo, el médico con **med_nroMatriculaProsional 1 en '2023-07-12'**)
.get('/citas/:id/:fecha', (req, res) => {
    res.send("Contar el número de citas que un médico tiene en un día específico (por ejemplo, el médico con **med_nroMatriculaProsional 1 en '2023-07-12'**)")
})

export default router;