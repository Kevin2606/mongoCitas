import express from 'express';
import dotenv from 'dotenv';
import pacientesRouter from './routes/pacientes.js';
import medicosRouter from './routes/medicos.js';
import citasRouter from './routes/citas.js';
import { crearToken as loginFn } from './middlewares/jwt.js'

dotenv.config();

const app = express();
app.use(express.json());
app.post("/login", loginFn)
//TODO: Agregar el middleware passport.authenticate('bearer', { session: false }) a las rutas que necesiten autenticación
//TODO: Agrear la autorización a las rutas que necesiten autorización
app.use("/pacientes", pacientesRouter);
app.use("/medicos", medicosRouter);
app.use("/citas", citasRouter);



app.listen(process.env.PORT, () =>
    console.log(`Example app listening on http://localhost:${process.env.PORT}`),
);
