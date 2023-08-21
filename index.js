import express from 'express';
import dotenv from 'dotenv';
import pacientesRouter from './routes/pacientes.js';
import medicosRouter from './routes/medicos.js';
import citasRouter from './routes/citas.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use("/pacientes", pacientesRouter);
app.use("/medicos", medicosRouter);
app.use("/citas", citasRouter);



app.listen(process.env.PORT, () =>
    console.log(`Example app listening on http://localhost:${process.env.PORT}`),
);
