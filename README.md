# Mongo Citas 💉💊🩺

## Instalacion y uso
Para hacer uso de **mongoCitas**  se debe tener instalado [GIT](https://git-scm.com/), [Node.js](https://nodejs.org/es/)

### Clonar el repositorio
```bash
git clone https://github.com/Kevin2606/mongoCitas.git
```
> Una vez clonado el repositorio accede a la carpeteta del proyecto
### Instalar dependencias
```bash
npm install
```
### Configurar variables de entorno
Crear un archivo .env en la raiz del proyecto
```bash
touch .env
```
> Nota: Este comando solo funciona en sistemas operativos basados en Unix.
> Si estas en Windows puedes crear el archivo .env desde el explorador de archivos

Una vez creado el archivo .env, accede a el desde un editor de texto
Agregar las siguientes variables de entorno
```bash
ATLAS_USER = "root"
ATLAS_PASSWORD = ""
ATLAS_DB = ""
PORT = 3000
JWT_SECRET="secret"
```
> Nota: En el campo hostname y port de SERVER se recomienda en el hostname dejar el valor de "localhost" y en el port se puede cambiar a un puerto que no este en uso, por ejemplo 8080, 3000, 5000, etc. El rango de puertos disponibles es de 0 a 65535, se recomienda no utilizar los puertos reservados que van del 0 al 1023, para mas informacion sobre los puertos reservados [click aqui](https://es.wikipedia.org/wiki/Anexo:Puertos_de_red_utilizados_por_protocolos_de_transporte)
>
> Nota: En el campo ATLAS_USER y ATLAS_PASSWORD se debe agregar el usuario y contraseña de la base de datos, si se usa el archivo .env.example se debe cambiar el valor de USER y PASSWORD por los valores de la base de datos que se encuentra en la nube.
> 
> Nota: En el campo JWT_SECRET se debe agregar una cadena de texto que sera utilizada para la generacion de tokens JWT, esta cadena de texto puede ser cualquiera, como el que esta por ejemplo: "secret".

>**Cada cambio en las variables de entorno requiere reiniciar el servidor para que los cambios surtan efecto.**

### Base de datos
En la carpeta **database** se encuentra el archivo **query.mongodb** que contiene el script para crear la base de datos y las tablas necesarias para el funcionamiento del proyecto. Tambien puedes optar por usar el archivo **.env.example** que contiene las variables de entorno necesarias para la conexion a la base de datos, solo debes cambiar el nombre del archivo a **.env** y esta te conectara a la base de datos que se encuentra en la nube.


### Iniciar el servidor
Para iniciar el servidor se debe ejecutar en la terminal para iniciar el servidor.

```bash
npm run dev
```

### Uso de la plataforma
Para hacer uso de la plataforma se debe contar con herramientas informaticas para la realizacion de pruebas de api como **[Thunder Client](https://www.thunderclient.com/)** o **[Postman](https://www.postman.com/)**, ademas necesitas obtener un token de autenticacion, para esto se debe hacer una peticion GET a la ruta **/token** con la query tabla y especificar a que tabla se quiere hacer la peticion. 
El siguiente ejemplo muestra como obtener un token de autenticacion para la tabla usuarios.

**NOTA: En la raiz del proyecto, el archivo api.http contiene ejemplos de peticiones para cada endpoint. Puedes hacer uso de cualquiera de las herramientas anteriormente mencionadas, o usar [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) y ejecutar cada peticion con un solo click**


### Obtener token de autenticacion
```bash
GET /login
```
En el body de la peticion se debe enviar un objeto JSON con los datos de autenticacion, el siguiente ejemplo muestra como enviar los datos de autenticacion para usuarios y medicos.

- Para usuarios:
```json
{
  "rol": 1,
  "email": "juan@example.com"
}
```
- Para medicos:
```json
{
  "rol": 2,
  "matricula_profesional": 54321
}
```


El token de autenticacion sera necesario para cada endpoint listado en la seccion siguiente, para hacer uso de estos endpoints se debe agregar el token de autenticacion en el header de la peticion con el nombre **Authorization**.
> Nota: El token de autenticacion tiene una duracion de 1 hora, despues de este tiempo se debe volver a solicitar un nuevo token.

### Endpoints

#### Citas
```Bash
GET http://localhost:3000/citas
```

| Método HTTP | Ruta                               | Descripción                                                            |
|-------------|------------------------------------|------------------------------------------------------------------------|
| GET         | /                                  | Obtener todas las citas alfabéticamente.                               |
| GET         | /paciente/:id                      | Encontrar la próxima cita para un paciente específico.                 |
| GET         | /medico/:id                        | Encontrar todos los pacientes que tienen citas con un médico específico.|
| GET         | /fecha/:fecha                      | Encontrar todas las citas para un día específico.                       |
| GET         | /genero/:genero                    | Obtener todas las citas realizadas por los pacientes de un género, si su estado de la cita fue atendida.|
| GET         | /rechazadas/:mes                   | Mostrar todas las citas rechazadas en un mes específico, incluyendo la fecha de la cita, el nombre del usuario y el médico.|

#### Pacientes
```Bash
GET http://localhost:3000/pacientes
```

| Método HTTP | Ruta                               | Descripción                                                            |
|-------------|------------------------------------|------------------------------------------------------------------------|
| GET         | /                                  | Obtener todos los pacientes alfabéticamente.                           |
| GET         | /consultorios/:id                  | Obtener los consultorios donde se aplicaron citas para un paciente específico. |
| POST        | /                                  | Insertar un paciente en la tabla de usuarios. Si es menor de edad, se solicitará primero que se ingrese al acudiente y se validará si el acudiente ya estaba registrado. |

#### Medicos
```Bash
GET http://localhost:3000/medicos
```

| Método HTTP | Ruta                               | Descripción                                                            |
|-------------|------------------------------------|------------------------------------------------------------------------|
| GET         | /consultorios                      | Obtener los médicos y sus consultorios.                                 |
| GET         | /citas/:id/:fecha                  | Contar el número de citas que un médico tiene en un día específico.    |
| GET         | /:especialidad                     | Obtener todos los médicos de una especialidad específica.              |


## Autor

- Kevin Gallardo - [@Kevin2606](https://github.com/Kevin2606)