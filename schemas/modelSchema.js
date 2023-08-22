import { z } from "zod";

const pacientesSchema = z.object({
    direccion: z.string({required_error: "La direccion es requerida"}).min(1).max(100),
    email: z.string({required_error: "El email es requerido"}).email(),
    genero: z.number({required_error: "El genero es requerido"}).int().min(1).max(2),
    nombre: z.string({required_error: "El nombre es requerido"}).min(1).max(50),
    segundoNombre: z.string({required_error: "El segundoNombre es requerido"}).min(1).max(50),
    primerApellido: z.string({required_error: "El primerApellido es requerido"}).min(1).max(50),
    segundoApellido: z.string({required_error: "El segundoApellido es requerido"}).min(1).max(50),
    telefono: z.string({required_error: "El telefono es requerido"}).min(1).max(20),
    tipoDoc: z.number({required_error: "El tipoDoc es requerido"}).int().min(1).max(3)
});

export {
    pacientesSchema
}