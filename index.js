import express from 'express';
import dotenv from 'dotenv';
import pacientesRouter from './routes/pacientes.js';
import medicosRouter from './routes/medicos.js';
import citasRouter from './routes/citas.js';
import { crearToken as loginFn } from './middlewares/jwt.js'
import passportConfig from './middlewares/passportConfig.js';
import authorization from './middlewares/authorization.js'

dotenv.config();

const app = express();
app.use(express.json());
app.post("/login", loginFn)
//TODO: Agrear la autorización a las rutas que necesiten autorización
app.use(passportConfig.authenticate('bearer', { session: false }), authorization)
app.use("/pacientes", pacientesRouter);
app.use("/medicos", medicosRouter);
app.use("/citas", citasRouter);

app.get("/hola", (req, res) => {
    req.baseUrl
});

app.listen(process.env.PORT, () =>
    console.log(`Example app listening on http://localhost:${process.env.PORT}`),
);
