[![Deploy Backend into development](https://github.com/Project-Developers-team/backend/actions/workflows/deploy-dev.yaml/badge.svg?branch=development)](https://github.com/Project-Developers-team/backend/actions/workflows/deploy-dev.yaml)

## Requisitos Previos

Asegúrate de tener instalado Node.js y npm en tu máquina.

## Configuración del Proyecto

1. Clona este repositorio: `git clone https://github.com/Project-Developers-team/backend.git`
2. Navega al directorio del proyecto: `cd tu-proyecto`
3. Preparar los hooks de Husky: `npm run prepare`
4. Instala las dependencias: `npm install`

## Scripts Disponibles

En el directorio del proyecto, puedes ejecutar los siguientes comandos:

### `npm run start`
### `npm run start:dev`
### `npm run start:debug`
### `npm run start:prod`
### `npm run lint`
### `npm run prepare`
### `npm run test:e2e`

Ejecuta la aplicación en modo de desarrollo. Abre [http://localhost:4000](http://localhost:4000) para verla en tu navegador.

La página se recargará automáticamente si realizas modificaciones. También verás errores de lint en la consola.

### `npm run build`

Construye la aplicación para producción en la carpeta `dist`. Optimiza el código para obtener el mejor rendimiento.

El build está listo y optimizado para la producción.

## Tecnologías Utilizadas

- NestJS
- TypeScript
- PostgreSQL
- TypeORM
- Redis
- Docker compose


## Branches

La nomenclatura de las ramas deben seguir la siguiente estructura: PD-[numero-tarea-JIRA]-descripcion para que se registre en la tarea de JIRA 
Ejemplos:
  ```sh
  bugfix/PD-63-error-conexion
  feature/PD-43-layout-login
  ```


## Commits

La nomenclatura de los commits deben seguir la siguiente estructura: PD-[numero-tarea-JIRA]-descripción para que se registre en la tarea de JIRA.


## Pushes a origin

Para que los cambios se puedan subir al repositorio, hay una validación y si los test:e2e no pasan, no se podrá hacer el push

## Estructura del Proyecto

Explicación breve de la estructura de carpetas del proyecto.

## Contribución

Si quieres contribuir a este proyecto, sigue los siguientes pasos:

1. Haz un fork del proyecto.
2. Crea una rama para tu contribución: `git checkout -b feature/nueva-caracteristica`.
3. Realiza tus cambios y haz commit: `git commit -m 'Añade nueva característica'`.
4. Haz push a la rama: `git push origin feature/nueva-caracteristica`.
5. Abre un pull request en GitHub.

## Licencia

Este proyecto está bajo la Licencia [Nombre de la Licencia]. Consulta el archivo `LICENSE` para más detalles.