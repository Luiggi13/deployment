<p align="center">
    <image src="../assets/pd_icon_ux.png" alt="project developers" height="100px" width="100px" style="center">
</p>

## Deployment de toda la solución basada en contenedores Docker (PostgreSQL).

Antes de poder deployar los contenedores hemos de asegurarnos tener docker y docker-compose instalado en nuestro sistema.
Para ello lanzaremos el siguiente comando saber la versión actual de Docker y Docker Compose desde la terminal:

```sh
docker --version
docker-compose --version
```
En caso de que no tengamos Docker en nuestro sistema operativo, tenemos 2 opciones, instalarlo como aplicación o por linea de comandos.
Si no habéis trabajado con Docker os recomendaría empezar con Docker Desktop:

# Instalación de Docker Desktop:

- [Docker Desktop MAC][docker-desktop-mac]
- [Docker Desktop UBUNTU][docker-desktop-ubuntu]
- [Docker Desktop WINDOWS][docker-desktop-windows]
- [BREW - terminal][docker-brew]

Una vez instalado, lo más normal es crearse un usuario en [***Docker Hub***][docker-hub], y luego hacéis login en Docker Desktop, así en un futuro si queréis podéis subir vuestra própias imágenes al cloud.

Una vez instalado, debéis reiniciar la terminal que tengais abierta y volvemos al paso anterior y comprobamos la versión de Docker para asegurar que se ha instalado correctamente. 


# Levantar la base de datos
Vamos a proceder a levantar el contenedor pero antes hemos de asegurarnos de renombrar el archivo `.env.template` a `.env` y que la configuración del archivo la tengamos correctamente. Podéis cambiar los valores de las variables a vuestro gusto.

Ruta del archivo: `dockers/.env`

OS dejo un ejemplo del .env

`POSTGRES_PASSWORD`=strongpassword

`POSTGRES_USER`=superuser

`POSTGRES_DB`=database_name


# Levantar el proyecto

Una vez hayamos rellenado los campos correctamente iniciamos el proceso de levantar todo. Para ello desde la raíz del proyecto lanzamos el siguiente comando.

- Comando que lanzamos en la terminal para ver todo el proceso
  ```sh
  docker-compose -f docker/local.dockers.yml up
  ```
Una vez levantado los dockers, ya podéis usar la DB. Y desde ahora podéis parar el Docker desde la aplicación de eescritorio.

# Cómo conectar a la nueva DB:

Al crear una conexión de Base de datos en DBeaver o algun complemento de VS Code, o pide lo siguiente:
host: 127.0.0.1
username: usuario_del_archivo_env
password: password_del_archivo_env
database: database_del_archivo_env

Y con esos datos ya os podréis conectar a vuestra nueva base de datos PostgreSQL.

Este comando lo que hace es leer la configuración de todos los servicios que hemos declarado en el archivo **YML**. El parámetro `-f` sirve para indicarle que la configuración está en ese archivo, por si queremos lanzar el comando desde otra ruta (en ese caso deberíamos especificar la ruta donde se encuentra nuestra archivo **YML**)

Los **logs** que vemos en la terminal son de todos los servicios que compone el proyecto, por eso si queremos, podemos lanzar el mismo proyecto pero en modo background para que la terminal no vaya mostrando los logs.

- Primero eliminariamos el proyecto lanzado anteriormente.
```sh
  docker-compose -f docker/local.dockers.yml down -v
```

- Seguidamente levantamos todo otra vez pero en modo background con el flag `-d`
```sh
  docker-compose -f docker/local.dockers.yml up -d
```

# Cómo conectar a Redis de Docker:
Para conectarnos al Redis desde NestJS, añadiremos las siguientes claves al `.env` que hay en la raíz del proyecto.

```
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_USERNAME=
REDIS_PASSWORD=eYVX7EwVmmxKPCDmwMtyKVge8oLd2t81
```

Comandos docker/docker-compose más usados:
##### Levanta todo el proyecto mostrando los logs en la terminal
En ubuntu podemos hacer un `Ctrl+z` y pasar esos logs en segundo plano. Para volver a verlo escribimos en la terminal `fg` y recuperamos la traza

```sh
  docker-compose -f docker/local.dockers.yml up
```
##### Levanta todo el proyecto en modo `dettached`
Así no lanza los logs, solo devuelve el estado

```sh
  docker-compose -f docker/local.dockers.yml up -d
```

##### Elimina el proyecto pero no los vólumenes asociados
Deja los datos en persistencia

```sh
  docker-compose -f docker/local.dockers.yml down
```

##### Elimina el proyecto y los vólumenes asociados
No deja los datos en persistencia

```sh
  docker-compose -f docker/local.dockers.yml down -v
```

##### Para el proyecto
Para cualquier proyecto levantado con docker-compose
```sh
  docker-compose -f docker/local.dockers.yml stop
```
##### Inicia un proyecto parado
Desde un archivo *YML*
```sh
  docker-compose -f docker/local.dockers.yml start
```

##### Reinicia un proyecto
Reinicia cualquier proyecto levantado con docker-compose
```sh
  docker-compose -f docker/local.dockers.yml restart
```

##### Crea un volumen de datos para nuestras aplicaciones
Para mantener persistencia
```sh
  docker volume create mi_volumen
```

##### Lista todos los volumenes creados en docker
Hay que ir eliminando lo que no se use, ya que ocupa espacio en disco
```sh
  docker volume ls
```
##### Crea un network
Para que podamos compartir la conexión entre containers

```sh
  docker network create -d bridge minetwork
```

##### Lista todas las network creadas en docker
No eliminar las networks por defecto **host o bridge**

```sh
  docker network ls
```

##### Lista todos los containers
Sólo los contenedores activos

```sh
  docker container ls
```

##### Lista todos los containers
Los activos y no activos

```sh
  docker container ls -a
```

##### Lista todas las imágenes
Interesante ya que nos muestra las imágenes con sus tags, espacio en disco ...
```sh
  docker image ls
```

##### Genera un contenedor
A partir de una archivo `Dockerfile` y lo hace con el tag `latest`

```sh
  docker build -t back-api .
```

##### Genera un contenedor a partir de una archivo `Dockerfile` y lo hace con el tag `dev`
Cambiamos *dev* por nuestro tag y listos

```sh
  docker build -t back-api:dev .
```

##### Logs de un contenedor por CONTAINER ID
Muestra en la terminal las últimas 1000 líneas del log de un contenedor por `CONTAINER ID`

```sh
  docker logs --tail 1000 -f 5f470aeb1d57
```

##### Logs de un contenedor por CONTAINER NAME
Muestra en la terminal las últimas 1000 líneas del log de un contenedor por `CONTAINER NAME`

```sh
  docker logs --tail 1000 -f back-api
```

##### ELiminar imágenes "huérfanas"
Elimina todas aquellas imágenes que no tienen tag y no son referenciadas por otro container

```sh
  docker image prune
```

##### ELiminar imágenes que no son referenciadas por ningun contenedor existente
Elimina todas aquellas imágenes que no son referenciadas por otro container

```sh
  docker image prune -a
```

##### ELiminar imágenes que no son referenciadas por ningun contenedor existente y han sido parados más de N horas
Elimina todas aquellas imágenes que no son referenciadas por otro container

```sh
  docker image prune -a --filter "until=24h"
  docker image prune -a --filter "until=48h"
  ...
```

Todas las sentencias de prune son aplicables a:
- Image
- Container
- Network
- Volume

[docker-prune]: <https://docs.docker.com/config/pruning/>
[docker-desktop-mac]: <https://docs.docker.com/desktop/install/mac-install/>
[docker-desktop-ubuntu]: <https://docs.docker.com/desktop/install/linux-install/>
[docker-desktop-windows]: <https://docs.docker.com/desktop/install/windows-install/>
[docker-brew]: <https://formulae.brew.sh/formula/docker>
[docker-hub]: <https://hub.docker.com/>

