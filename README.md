# webp-gulp-converter

<img align="right" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Gulp.js_Logo.svg/800px-Gulp.js_Logo.svg.png" height="150px">

Gulp es una toolkit de Javascript contenido en un modulo de NodeJS. Gulp sirve para automatizar tareas repetitivas en el desarrollo de una aplicación tales como: minificar codigo, compilar codigo, conversion de imagenes, etc. En realidad sirve para muchas cosas mas, simplemente basta con echar un ojo a su biblioteca de plugings [gulp-plugins](https://gulpjs.com/plugins) para empezar a descubrir muchas mas utilidades de Gulp.

### Uso del repositorio

Para hacer uso de este repositorio y empezar a usar Gulp requerimos de las siguientes herramientas:

+ [NodeJS + npm](https://nodejs.org/es/)
+ [git](https://git-scm.com/)

Necesitaras clonar este repositorio en una carpeta en tu PC:

```git clone https://github.com/Swumplurd/webp-gulp-converter```

Dentro de la carpeta de el proyecto usa el comando:

```npm install```

Este comando instalara los siguienetes modulos de NodeJS ```gulp``` y ```gulp-webp```

Una ves terminados de instalar los modulos requeriremos colocar imagenes en la carpeta ```input/```. Los formatos soportados por gulp-webp son: .png .jpeg .tiff .webp

Ahora usamos el comando en una terminal dentro de la carpeta del proyecto:

```gulp convertWebp```

Una ves finalizado el proceso, tendremos la conversion de imagenes en formato .webp dentro de la carpeta ```output/```

### Mas Informacion

Para mas informacion sobre gulp y gulp-webp visitar:

+ [gulp](https://gulpjs.com/)
+ [gulp-webp](https://www.npmjs.com/package/gulp-webp)

---

Cualquier duda o sugerencia al contenido del precente repositorio contactame en Discord: Swumplurd#3977