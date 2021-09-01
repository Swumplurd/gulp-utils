# gulp-utils

<img align="right" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Gulp.js_Logo.svg/800px-Gulp.js_Logo.svg.png" height="150px">

Gulp es una toolkit de Javascript contenido en un modulo de NodeJS. Gulp sirve para automatizar tareas repetitivas en el desarrollo de una aplicación tales como: minificar codigo, compilar codigo, conversion de imagenes, etc. En realidad sirve para muchas cosas mas, simplemente basta con echar un ojo a su biblioteca de plugings [gulp-plugins](https://gulpjs.com/plugins) para empezar a descubrir muchas mas utilidades de Gulp.

## Requerimientos

+ [NodeJS + npm](https://nodejs.org/es/)
+ [git](https://git-scm.com/)

Si te encuentas en Windows tambien es necesario activar el uso de scripts en PowerShell, para ello debes abrir PowerShell y escribir el siguiente comando:

`Set-ExecutionPolicy Unrestricted`

Una vez instalado NodeJs + npm y permitidos los scripts en PowerShell instalaremos el CLI de gulp con el siguiente comando:

`npm install --global gulp-cli`

## Uso del repositorio

Necesitaras clonar este repositorio en una carpeta en tu PC:

`git clone https://github.com/Swumplurd/gulp-utils`

Dentro de la carpeta de el proyecto usa el comando:

`npm install`

Este comando instalara los modulos necesarios

Terminado el proceso de instalacion de dichos modulos contaremos con dos funciones para ejecutar desde el gulp CLI

1) `gulp webp` -> Converita las imagenes contenidas en el directorio `inputs/img` y las alojara en el directorio `outputs/img-webp`

*Nota:* Los formatos soportados por gulp-webp son: .png .jpeg .tiff .webp

2) `gulp minify` -> Minificara las imagenes contenidas en el directorio `inputs/img` y las alojara en el directorio `outputs/img-min`
 
3) `gulp scss` -> Compilara los archivos `.scss` contenidos en el directorio `inputs/scss` y alojara el resultado en `outputs/css`

4) `gulp` -> Para ejecutar todas las tareas y activara el modo `watch`.

### Mas Informacion

Para mas informacion visitar:

+ [gulp](https://gulpjs.com/)
+ [sass](https://sass-lang.com/)
+ [gulp-sass](https://www.npmjs.com/package/gulp-sass)
+ [gulp-webp](https://www.npmjs.com/package/gulp-webp)
+ [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin)
---

Cualquier duda o sugerencia al contenido del precente repositorio contactame en Discord: Swumplurd#3977

webp
minify
scss
