const { src, dest, watch, parallel} = require("gulp"); // Importa funciones gulp

//CSS
const sass = require("gulp-sass")(require("sass")); // Gulp SASS
const plumber = require('gulp-plumber'); //Hace que los errores no detengan el watch ayudando su corrección

//Comprimir el codigo CSS haciendolo ligero
const autoprefixer = require('autoprefixer'); 
const cssnano = require("cssnano"); 
const postcss = require('gulp-postcss') 
const sourcemaps = require('gulp-sourcemaps'); // Mapea el codigo css en la estructura del codigo fuente

//Imagenes
const cache = require('gulp-cache'); // Almacena en caché el resultado de las tareas
const webp = require('gulp-webp'); // Convierte imagenes a webp
const avif = require('gulp-avif'); // Concierte imagenes a avif
const imagemin = require('gulp-imagemin'); //Optimiza las imagenes

//Variables
const fileSCSS = 'src/scss/**/*.scss'; // Ruta donde se leerá el codigo SCSS
const fileJS = 'src/js/**/*.js'; // Ruta donde se leerá el codigo JS
const fileImg = 'src/img/**/*.{png,jpg}'; // Ruta donde se leerá las imagenes

// Javascript
const terser = require('gulp-terser-js')

function css (done) { // Convierte el codigo fuente SCSS a CSS optimizado para el navegador
    src(fileSCSS)// Identificar el archivo SASS
        .pipe(sourcemaps.init())
        .pipe(plumber()) // Hace que los errores no detengan la ejecucion
        .pipe(sass())// Compilarlo
        .pipe(postcss([autoprefixer(), cssnano()])) // Esto comprime el codigo css haciendolo mas ligero
        .pipe(sourcemaps.write('.')) //Genera el mapa para debugear el SCSS dictando su posición inicial en el código fuente
        .pipe(dest("build/css"))// Almacenarla en el disco duro

    done(); // Callback que avisa a gulp cuando llegamos al final
}

function versionWebp (done) { /* Convierte imagenes a webp */
    const opciones = {
        quality:50 /* Calidad de las imagenes */
    }

    src(fileImg)
        .pipe(webp(opciones))
        .pipe(dest('build/img'))
    done();
}

function versionAvif (done) { /* Convierte imagenes a Avif */
    const opciones = {
        quality:50 /* Calidad de las imagenes */
    }

    src(fileImg)
        .pipe(avif(opciones))
        .pipe(dest('build/img'))
    done();
}

function imagenes (done) { /* Optimiza las imagenes y las exporta optimizadas*/
    const opciones = {
        optimizationLevel: 3 /* Nivel de optimización de las imágenes */
    }
    src(fileImg)
        .pipe( cache( imagemin(opciones) ) )
        .pipe(dest('build/img'))
    done();
}

function javascript (done) { // Lee el JavaScript fuente y lo optimiza para el navegador
    src(fileJS)
        .pipe(sourcemaps.init())
        .pipe(terser())
        .pipe(sourcemaps.write('.'))
        .pipe(dest('build/js'))
    done();
}

function dev(done) { //Nos actualiza el proyecto
    watch(fileSCSS, css)
    watch(fileJS, javascript)

    done();
}

exports.css = css;
exports.js = javascript;
exports.imagenes = css;
exports.versionWebp = versionWebp;
exports.versionAvif = versionAvif;
exports.dev = parallel(imagenes, versionWebp,versionAvif,dev);
