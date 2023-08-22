const usuarioMapping = {
    direccion: "usu_direccion",
    email: "usu_email",
    genero: "usu_genero",
    nombre: "usu_nombre",
    segundoNombre: "usu_segdo_nombre",
    primerApellido: "usu_primer_apellido",
    segundoApellido: "usu_segdo_apellido",
    telefono: "usu_telefono",
    tipoDoc: "usu_tipodoc",
  };
  
const funMapping = (validatedData) => {
    // Realiza la transformación de nombres de campo
    const transformedData = {};
    for (const originalField in usuarioMapping) {
        const targetField = usuarioMapping[originalField];
        transformedData[targetField] = validatedData[originalField];
    }
    return transformedData;
}

export default funMapping;