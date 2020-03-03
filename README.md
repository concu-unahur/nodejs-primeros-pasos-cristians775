# Primeros pasos en NodeJS

## Instalación del entorno Node

### Para Linux o Mac:
1. Instalar [nvm](https://github.com/nvm-sh/nvm) (_en las compus del laboratorio esto ya está hecho_).
1. Una vez clonado el repo, ejecutar lo siguiente para instalar la versión de Node correspondiente:
  ```shell
  cd nodejs-primeros-pasos
  nvm install
  ```

### Para Windows
Nunca tuvimos el gusto de instalar NodeJS en Windows, aunque pareciera haber algunas alternativas:
* Instalar [nvm-windows](https://github.com/coreybutler/nvm-windows) y seguir los mismos pasos que para Linux.
* Instalar directamente la versión 12.16.1, que es (en teoría) la que vamos a usar para todos los ejemplos.

## Cómo correr los ejemplos

En particular este proyecto no tiene dependencias, pero dejamos los pasos que deberían hacerse para todos los proyectos Node:

```shell
# Instalación de dependencias, una vez por proyecto
cd nodejs-primeros-pasos
npm install
```

Luego, para ejecutar los scripts:

```shell
node index.js      # o el archivo que quieran ejecutar
```

Si todo salió bien, deberían ver algo como esto:

```
❯ node index.js   
Siguiente de 8 => 9
Doble de 8 => 16
Siguiente del doble de 8 => 17
Doble del siguiente de 8 => 18
Cuadruple de 8 => 32
```
